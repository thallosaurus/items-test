<template>
    <header>
        <n-flex justify="space-between">
            <div style="padding:1em">
                <n-button @click="$emit('menu')">
                    <n-icon color="#ffffff" size="26">
                        <IosMenu />
                    </n-icon>
                </n-button>
            </div>
            <n-space vertical>
                <form style="padding:1em">
                    <n-input-group>
                        <n-input type="text" placeholder="Search..." v-model:value="query"></n-input>
                        <n-button type="primary" @click="search">Go!</n-button>
                    </n-input-group>
                </form>
            </n-space>
            <div></div>
        </n-flex>
    </header>
</template>

<script>
import { router } from '../router.js';
import { IosMenu } from '@vicons/ionicons4';

export default {
    data() {
        return {
            query: ""
        }
    },
    components: {
        IosMenu
    },
    methods: {
        search() {
            router.push("/search/" + this.query)
        }
    }
}
</script>