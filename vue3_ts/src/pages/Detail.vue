<template>
  <div class="content-wrapper">
    <ul class="new-list">
      <!-- 参数是 query -->
      <!-- <li>编号：{{ query.id }}</li>
      <li>标题：{{ query.title }}</li>
      <li>内容：{{ query.content }}</li> -->

      <!-- 参数是 params -->
      <!-- <li>编号：{{ params.id }}</li>
      <li>标题：{{ params.title }}</li>
      <li>内容：{{ params.content }}</li> -->

      <!-- props 接收 -->
      <li>编号：{{ id }}</li>
      <li>标题：{{ title }}</li>
      <li>内容：{{ content }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="Detail">
defineProps(["id", "title", "content"]);
// import { useRoute } from "vue-router";
// import { toRefs } from "vue";
// 参数是 params
// const route = useRoute();
// const { params } = toRefs(route);
// console.log(route);
// console.log(route.params.id);

// 参数是 query
// import { toRefs } from "vue";
// let route = useRoute();
// let { query } = toRefs(route);
// console.log(route);
// console.log(route.query.b);
</script>
 
<style scoped>
.content-wrapper {
  border: 1px solid #ccc; /* 边框样式 */
  padding: 10px; /* 内边距 */
  float: right; /* 右浮动 */
  width: 200px; /* 宽度 */
}
/* 去掉 li 标签的点样式 */
.content-wrapper ul {
  list-style-type: none;
}

/* 新闻链接样式 */
.news-link {
  display: block;
  margin-bottom: 10px; /* 设置间隔 */
  text-decoration: none; /* 移除下划线 */
  color: #333; /* 文字颜色 */
}
</style>