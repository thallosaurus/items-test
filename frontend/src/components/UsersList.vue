<template>
    <n-space vertical :size="12">
        <n-flex justify="end">
            <n-button @click="">
                Add
            </n-button>
        </n-flex>
        <n-data-table :columns="columns" :data="data" />
    </n-space>0
</template>

<script>
import { getUsers } from '../netcode.js';
import { h } from 'vue';
import { NButton } from 'naive-ui'

import { RouterLink } from 'vue-router'

export default {
    async setup() {
        const data = await getUsers();
        console.log(data);

        const onclick = () => {
            this.openUser();
        }
        const columns = [
            { title: "Username", key: "username" },
            {
                title: "Action", key: "id", render: (row) => {
                    return h(RouterLink, {
                        to: "/users/" + row.id
                    },
                        {
                            default: () => "Open"
                        })
                }
            }
        ];

        return {
            data,
            columns
        }
    },
    methods: {
        openUser(id) {
            this.$router.push("/users/" + id);
        }
    }
}
</script>