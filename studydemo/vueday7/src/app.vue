<template>
  <div id="app">
    {{msg}}  
    <!-- <router-view></router-view> -->
    <button @click="show">notify</button>
  </div>  
</template>

<script>
export default {
  data(){
    return {
      msg:'hello'
    }
  },
  methods:{
    show(){
      this.$notify('我太丑',{delay:1000})
    }
  }
}
</script>

<style scoped>

</style>

