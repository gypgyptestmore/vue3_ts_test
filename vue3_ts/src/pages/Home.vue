<template>
  <div>home</div>
</template>

<script setup name="Home" lang="ts">
import { onMounted, onUnmounted } from "vue";
onMounted(() => {
  console.log("home挂载了");
});
onUnmounted(() => {
  console.log("home 卸载了");
});
</script>

<style scoped>
</style>