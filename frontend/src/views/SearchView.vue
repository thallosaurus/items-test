<script setup>
import SearchResults from '../components/SearchResults.vue'
</script>

<script>
export default {
    props: ['q']
}
</script>

<template>
    <h1>Search Results</h1>
    <p>Query: {{ q }}</p>
    <Suspense>
        <SearchResults :query="q" />
    </Suspense>
</template>
