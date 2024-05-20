<script setup>
import ItemsList from '../components/ItemsList.vue'
import { getItemById, addNewItem } from '../netcode.js';
</script>

<template>
    <h1>Items</h1>

    <div class="full-w">
        <Suspense>
            <ItemsList></ItemsList>

            <template #fallback>
                Loading...
            </template>
        </Suspense>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.full-w {}
</style>