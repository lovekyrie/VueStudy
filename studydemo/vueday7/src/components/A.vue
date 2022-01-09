<template>
  <div>
    <button @click="handleEmitEvent">触发自定义事件</button>
    <component-b></component-b>
  </div>
</template>
<script>
import componentB from "./B.vue";
export default {
  name: "A",
  components: { componentB },
  provide: {
    name: "Aresn",
  },
  methods: {
    handleEmitEvent() {
      //在当前组件上触发自定义事件test,并传值
      this.$emit("test", "Hello Vue.js");
    },
  },
  mounted() {
    //监听自定义事件test
    this.$on("test", (text) => {
      window.alert(text);
    });
  },
};
</script>