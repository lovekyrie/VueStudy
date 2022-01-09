<template>
  <div>
    <div>首页</div>
    <button @click="handleClick">父组件触发事件</button>
    <A></A>
  </div>
</template>
<script>
import A from "./A.vue";
import Emitter from "../mixins/emitter";
export default {
  components: { A },
  mixins: [Emitter],
  methods: {
    handleClick() {
      this.broadcast("componentB", "on-message", "Hello Vue.js");
    },
  },
};
</script>
<style lang="less" scoped>
</style>
