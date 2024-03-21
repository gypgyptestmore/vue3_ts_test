<template>
  <div>
    <h3>当前求和{{ sum }}</h3>
    <button @click="add">点我 Sum+1</button>
    <button @click="addTen">点我➕10</button>
    <hr />
    <hr />
    <img
      v-for="(dog, index) in dogList"
      :src="dog"
      :key="index"
      alt=""
      style="height: 100px; margin-right: 2px"
    />
    <button @click="getDog">再来一张图片</button>
  </div>
</template>

<script setup name="useSum" lang="ts">
import useSum from "../hooks/useSum";
import useDog from "../hooks/useDog";
const { sum, add, addTen } = useSum();
const { dogList, getDog } = useDog();
</script>


<style>
</style>