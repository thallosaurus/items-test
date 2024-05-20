<script setup>
import { useRouter, RouterLink } from 'vue-router';
import { h } from 'vue'
import { Home16Regular } from '@vicons/fluent'
import { DataObjectFilled, LogInFilled, ManageAccountsSharp } from '@vicons/material';
import { User } from '@vicons/fa';
import { NIcon } from 'naive-ui'
import { menuOptions } from '../sidebar.js';
</script>

<template>
    <!-- <n-flex vertical>

        <n-button @click="$router.push('/')">
            <n-icon :component="Home16Regular" :size="26">
            </n-icon>
        </n-button>
        <n-button @click="$router.push('/test')">
            Test
        </n-button>
        <n-button @click="$router.push('/items')">
            <n-icon :component="DataObjectFilled" :size="26" />
        </n-button>
        <n-button @click="$router.push('/users')">
            <n-icon :component="User" :size="26" />
        </n-button>
        <n-space vertical></n-space>
        <n-button @click="$router.push('/account')" class="last">
            <n-icon v-if="$store.getters.isLoggedIn" :component="ManageAccountsSharp" :size="26"/>
            <n-icon v-else :component="LogInFilled" :size="26"/>
        </n-button>
    </n-flex> -->


</template>

<script>



export default {
    data() {
        return {
            open: false,
            menuOptions
        }
    },
    props: ["collapsed"]
}
</script>

<style scoped>
.sidebar-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
}

button {
    height: 3em;
}

.last {}
</style>