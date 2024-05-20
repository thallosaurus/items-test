<script setup>
import SuspenseComp from './SuspenseComp.vue';

</script>

<template>
  <h1>{{ msg }}</h1>
  <p>
    <button @click="count++">count is: {{ count }}</button>
  </p>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
