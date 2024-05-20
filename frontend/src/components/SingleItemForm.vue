<template>
    <h1>Item: {{ data.name }}</h1>
    <RouterLink to="/items">Go back</RouterLink>
    <p>
        Name: <b>
            {{ data.name }}
        </b>
    </p>
    
    <p>
        UUID: <b>{{ data.uuid }}</b>
    </p>

    <n-qr-code value="test"/>
</template>

<script>
import { getItemById } from '../netcode.js'
export default {
    async setup(props) {
        console.log(props.itemId)
        let data = await getItemById(props.itemId)
        console.log(data);
        return {
            data
        }
    },

    props: ["itemId"]
}
</script>