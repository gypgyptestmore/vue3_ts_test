<template>
  <div>
    <h3>当前求和:{{ sum }}</h3>
    <button @click="changeSum">sum+1</button>
  </div>
</template>

<script setup lang="ts" name="live">
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
let sum = ref(1);
function changeSum() {
  sum.value += 1;
}
console.log("setup");
onBeforeMount(() => {
  console.log("挂载之前");
});
onMounted(() => {
  console.log("挂载完毕");
});
onBeforeUpdate(() => {
  console.log("更新之前");
});
onUpdated(() => {
  console.log("更新完毕");
});
onBeforeUnmount(() => {
  console.log("卸载前");
});
onUnmounted(() => {
  console.log("卸载完毕");
});
</script>

<style>
</style>