<template>
    <n-space vertical>

        <n-flex justify="end">
            <n-button @click="handleClick">
                Add
            </n-button>
        </n-flex>
        
        <n-data-table :columns="columns" :data="data" />
        
        <n-flex justify="center">
            <n-pagination v-model:page="page" :page-count="Math.floor(fullcount / dataPerPage)"></n-pagination>
        </n-flex>
    </n-space>
</template>

<script>
import { h } from 'vue'
import { RouterLink, useRouter } from 'vue-router';
import { router } from '../router.js'
import { getItems, addNewItem } from '../netcode.js';
import { NButton } from 'naive-ui'

const createColumns = () => {
    return [
        {
            title: 'Name',
            key: 'name',
        },
        {
            title: "Action",
            key: "id",
            render(row) {
                /*return h(RouterLink, {
                    size: "small",
                    to: '/items/' + row.id
                },*/
                return h(NButton, {
                strong: true,
                size: 'small',
                onclick: () => router.push("/items/" + row.id)},
                    { default: () => 'Open' })
            }
        }
    ]
}

export default {
    async setup() {
        //const data = await mock_fetch_data();
        const data = await getItems();
        console.log("Resolved", data);

        return {
            data: data.data,
            fullcount: data.count,
            columns: createColumns()
        }
    },
    data() {
        return {
            page: 1,
            dataPerPage: 10
        }
    },
    methods: {
        handleClick() {
            const name = prompt("New name");
            addNewItem(name);

            getItems().then(data => {
                console.log(data.data);
                this.data = data.data
            })
        },
    }
}

function mock_fetch_data() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res([
                { id: 0, name: "Test Item" },
                { id: 1, name: "Test Item 2" },
            ])
        }, 5000)
    })
}
</script>