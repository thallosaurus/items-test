<script setup>
import UsersList from '../components/UsersList.vue';
</script>

<template>
    <h1>Users</h1>

    <Suspense>
        <UsersList />
    </Suspense>
</template>