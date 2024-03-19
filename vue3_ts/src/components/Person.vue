<template>
  <div class="person">
    {{ date }}
    {{ name }}
    {{ age }}
    <button @click="changeName">点击改名字</button>
    <button @click="changeDate">点击改日期</button>
    <button @click="changeNum">点击改数子</button>
  </div>
</template>
  
  <script lang="ts">
export default {
  name: "Person",
  data() {
    return {
      date: "周二",
      name: "张三",
      age: 1,
    };
  },
  methods: {
    changeName() {
      this.name = "我改名字了";
    },
    changeDate() {
      this.date = "周六去植物园逛逛";
    },
    changeNum() {
      this.age += 1;
    },
  },
};
</script>
  
  <style scoped>
.person {
  background-color: pink;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
button {
  margin: 0 15px;
}
</style>