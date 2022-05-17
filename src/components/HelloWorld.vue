<template>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts" setup>
defineProps({
  msg: {type: String, default: ""},
})
</script>

<style scoped>
</style>
