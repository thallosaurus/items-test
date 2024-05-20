<script setup>
import SingleItemForm from '../components/SingleItemForm.vue';
</script>

<template>
    <Suspense>
        <SingleItemForm :itemId="$route.params.id" />
    </Suspense>
</template>