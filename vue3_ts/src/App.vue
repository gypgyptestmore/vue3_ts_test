
<template>
  <div class="app">
    <h1 ref="ren">你好👋</h1>
    <button @click="showlog">测试</button>
    <person :list="persons" ref="ren1"></person>
    <button @click="print">点击打印 person 的ref</button>
    <live></live>
    <useSum></useSum>
    <div class="appp">
      <h2>我是欢迎语</h2>
      <!-- 导航区域 -->
      <div class="navigate">
        <RouterLink to="/home" active-class="active button">首页</RouterLink>
        <RouterLink to="/news" active-class="active button">新闻</RouterLink>
        <RouterLink to="/about" active-class="active button">关于</RouterLink>
      </div>
      <!-- 展示区域 -->
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script lang="ts" name="App" setup>
import { ref, defineExpose, reactive } from "vue";
import Person from "./components/Person.vue";
import Live from "./components/live.vue";
import useSum from "./components/useSum.vue";
import { RouterView, RouterLink } from "vue-router";
import { type Persons } from "./types/index";

let ren = ref();
function showlog() {
  console.log(ren.value);
}

let ren1 = ref();
function print() {
  console.log(ren1.value);
}

let persons = reactive<Persons>([
  { id: 1, name: "张三", age: 10 },
  { id: 2, name: "李四", age: 11 },
  { id: 3, name: "王五", age: 12, x: 1 },
]);
</script>

<style scoped>
.app {
  background-color: rgb(115, 187, 201);
}
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 页面整体布局样式 */
.appp {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

/* 欢迎语样式 */
.appp h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

/* 导航区域样式 */
.navigate {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.navigate a {
  text-decoration: none;
  border-radius: 5px;
  color: #333;
  padding: 5px 10px;
  margin: 0 10px;
}

.navigate a.active {
  font-weight: bold;
  background-color: #ffffff;
}

/* 按钮样式 */
.button {
  display: inline-block;
  padding: 8px 16px;
  /* background-color: #007bff; 按钮背景色 */
  color: #fff; /* 文字颜色 */
  text-decoration: none;
  border-radius: 4px; /* 圆角 */
  border: 1px solid #090909; /* 边框样式 */
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3; /* 鼠标悬停时背景色 */
}

/* 展示区域样式 */
.main-content {
  background-color: #f9f9f9;
  padding: 20px;
}
</style>
