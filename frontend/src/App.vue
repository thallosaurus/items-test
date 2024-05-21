<script setup>
import HelloWorld from './components/HelloWorld.vue'
import SidebarComp from './components/SidebarComp.vue'
import HeaderComp from './components/HeaderComp.vue'
import { menuOptions } from './sidebar.js';
import { darkTheme } from 'naive-ui'
</script>

<template>
  <n-drawer v-model:show="drawerActive" placement="left">
    <n-drawer-content>
      <n-menu :collapsed="collapsed" :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions"
        key-field="key" label-field="label" children-field="child" />
    </n-drawer-content>
  </n-drawer>

  <n-config-provider :theme="darkTheme">

    <n-layout style="height: 100vh">

      <n-layout>
        <n-layout-header bordered>
          <header>
            <HeaderComp @menu="drawerActive = true"/>
          </header>
        </n-layout-header>
        <n-layout-content>
          <main>
            <RouterView />
          </main>
        </n-layout-content>
      </n-layout>
    </n-layout>

  </n-config-provider>
</template>

<script>

export default {
  name: 'App',
  components: {
    HelloWorld,
    SidebarComp
  },
  data() {
    return {
      drawerActive: false,
      collapsed: false
    }
  },
  watch:{
    $route (to, from){
      console.log("watch")
        this.drawerActive = false;
    }
}
}
</script>

<style scoped>
#sbar {
  height: 100vh;
}

main {
  margin: 2em;
}
</style>