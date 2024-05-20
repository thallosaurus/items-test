<script setup>
import SuspenseComp from '../components/SuspenseComp.vue'

</script>

<template>
    <h1>Test View</h1>
    <p>This is a test</p>

    <n-button @click="testFail">
        Test Fail
    </n-button>
    <Suspense>
        <SuspenseComp />

        <template #fallback>
            Loading...
        </template>
    </Suspense>
</template>

<script>
export default {
    methods: {
        async testFail() {
            const data = await fetch("http://localhost:8080/fail")
        }
    }
};
</script>