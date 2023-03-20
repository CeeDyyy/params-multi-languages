<template>
  <div>loading...</div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    location.href = "/en";
});
</script>