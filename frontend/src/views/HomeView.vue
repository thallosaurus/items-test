<script setup>
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
    <h1>Home Page</h1>
</template>

<script>
export default {
    methods: {
        goHome() {
            this.$router.push("/");
        }
    }
}
</script>