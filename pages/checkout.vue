<template>
  <div>{{ route.name }}</div>
  <NuxtPage/>
</template>
<script setup lang="ts">
const route = useRoute();
</script>
