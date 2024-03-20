
<template>
  <div class="app">
    <h1>你好👋</h1>
    <button @click="showlog">测试</button>
    <person :list="persons"></person>
    <live></live>
  </div>
</template>
<script lang="ts" name="App" setup>
import { ref, defineExpose } from "vue";
import Person from "./components/Person.vue";
import Live from "./components/live.vue";
import { type Persons } from "./types/index";

let ren = ref();
function showlog() {
  console.log(ren.value);
}
let persons: Persons = [
  { id: 1, name: "张三", age: 10 },
  { id: 2, name: "李四", age: 11 },
  { id: 3, name: "王五", age: 12 },
];
</script>

<style scoped>
.app {
  background-color: rgb(115, 187, 201);
}
</style>
