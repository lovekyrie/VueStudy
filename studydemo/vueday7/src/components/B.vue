<template>
  <div>test B</div>
</template>
<script>
export default {
  name: "componentB",
  inject: ["name"],
  created() {
    this.$on("on-message", this.showMessage);
  },
  methods: {
    showMessage(text) {
      window.alert(text);
    },
  },
  mounted() {
    console.log(this.name);
  },
};
</script>