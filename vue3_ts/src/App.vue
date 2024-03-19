
<template>
  <div class="app">
    <h1>你好👋</h1>
    <person></person>
  </div>
</template>
<script lang="ts">
import Person from "./components/Person.vue";
export default {
  name: "App",
  components: {
    Person,
  },
};
</script>

<style scoped>
.app {
  background-color: rgb(115, 187, 201);
}
</style>
