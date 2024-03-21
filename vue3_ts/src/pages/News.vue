<template>
  <div class="sidebar">
    <!-- 导航区域 -->
    <div class="news-container">
      <ul>
        <li v-for="news in newLists" :key="news.id" style="color: red">
          <!-- query 传参 第一种写法： 字符写法-->
          <!-- <RouterLink
            :to="`/News/Detail/?id=${news.id}&title=${news.title}&content=${news.content}`"
            href="#"
            class="news-link"
          >
            {{ news.title }}-{{ news.content }}
          </RouterLink> -->
          <!-- query 传参 第二种写法： 对象写法-->
          <!-- <RouterLink
            :to="{
              path: '/News/Detail',
              query: {
                id: news.id,
                title: news.title,
                content: news.content,
              },
            }"
            href="#"
            class="news-link"
          >
            {{ news.title }}-{{ news.content }}
          </RouterLink> -->

          <!-- param 传参第一种写法：字符写法 -->
          <!-- <RouterLink
            :to="{
              path: `/News/Detail/${news.id}/${news.title}/${news.content}`, //拼接路径
            }"
            href="#"
            class="news-link"
          >
            {{ news.title }}-{{ news.content }}
          </RouterLink> -->
          <!-- param 传参第二种写法：对象写法 -->
          <RouterLink
            :to="{
              name: 'xiangxi', //这里是 name 的值
              params: {
                id: news.id,
                title: news.title,
                content: news.content,
              },
            }"
            href="#"
            class="news-link"
          >
            {{ news.title }}-{{ news.content }}
          </RouterLink>
        </li>
      </ul>
    </div>
    <!-- 展示区域 -->
    <div class="content-area">
      <RouterView></RouterView>
    </div>
  </div>
</template>

  
<script setup name="Naivete" lang="ts">
import { reactive } from "vue";
import { RouterView, RouterLink } from "vue-router";
const newLists = reactive([
  { id: 1, title: "帽子", content: "冷帽" },
  { id: 2, title: "外套", content: "羽绒服" },
  { id: 3, title: "裤子", content: "牛仔裤" },
]);
</script>

  <style scoped>
/* 侧边栏样式 */
.sidebar {
  display: flex; /* 使用 flex 布局 */
}

/* 导航区域样式 */
.news-container {
  width: 200px; /* 导航区域宽度 */
  background-color: #f4f4f4; /* 背景色 */
  padding: 20px; /* 内边距 */
}

/* 新闻链接样式 */
.news-link {
  display: block;
  margin-bottom: 10px; /* 设置间隔 */
  text-decoration: none; /* 移除下划线 */
  color: #d21f1f; /* 文字颜色 */
}

/* 展示区域样式 */
.content-area {
  flex: 1; /* 占据剩余空间 */
  padding: 20px; /* 内边距 */
}
</style>