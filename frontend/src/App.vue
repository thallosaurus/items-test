<script setup>
import HelloWorld from './components/HelloWorld.vue'
import SidebarComp from './components/SidebarComp.vue'
import HeaderComp from './components/HeaderComp.vue'
import { menuOptions } from './sidebar.js';
</script>

<template>
    <n-layout has-sider style="height: 100vh">
      <n-layout-sider bordered collapse-mode="width" :collapsed-width="64" :width="240" :collapsed="collapsed" show-trigger @collapse="collapsed = true"
        @expand="collapsed = false">
        <n-menu :collapsed="collapsed" :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions"
        
                key-field="key" label-field="label" children-field="child" />
      </n-layout-sider>
      <n-layout-content>
        <n-layout>
          <n-layout-header bordered><header>
            <HeaderComp />
          </header></n-layout-header>
          <n-layout-content>
            <main>
              <RouterView />
            </main>
          </n-layout-content>
        </n-layout>
      </n-layout-content>
    </n-layout>
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
      collapsed: false
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