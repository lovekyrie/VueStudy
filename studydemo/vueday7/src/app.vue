<template>
  <div id="app">
    {{ msg }}
    <!-- <router-view></router-view> -->
    <button @click="show">notify</button>
    <router-link to="/home">Home</router-link>
    <router-link to="/list">List</router-link>
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello",
    };
  },
  methods: {
    show() {
      this.$notify("我太丑", { delay: 1000 });
    },
  },
};
</script>

<style scoped>
</style>

