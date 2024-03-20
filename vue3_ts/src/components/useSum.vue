<template>
  <div>
    <h3>当前求和{{ sum }}</h3>
    <button @click="add">点我 Sum+1</button>
    <img
      v-for="(dog, index) in dogList"
      :src="dog"
      :key="index"
      alt=""
      style="width: 100px; height: 100px"
    />
    <button @click="getDog">再来一张图片</button>
  </div>
</template>

<script setup name="useSum" lang="ts">
import { ref, reactive } from "vue";
import axios from "axios";
let sum = ref(1);
let dogList = reactive(["https://acg.sx/images"]);
function add() {
  sum.value += 1;
}
async function getDog() {
  let result = await axios.get("https://picsum.photos/");
  console.log(result.data);
}
</script>


<style>
</style>