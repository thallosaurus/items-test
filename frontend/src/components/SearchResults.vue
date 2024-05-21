<template>
    <p v-for="d in data">
    {{ d }}
    </p>
</template>

<script>
import { search } from '../netcode.js'
export default {
    async setup(props) {
        const data = await search(props.query);
        console.log(data);
        return {
            data
        }
    },
    props: ["query"]
}
</script>