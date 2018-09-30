<template>
  <div id="app">
    {{msg}}  
    <router-view></router-view>
  </div>  
</template>

<script>
export default {
  data(){
    return {
      msg:'hello'
    }
  }
}
</script>

<style scoped>

</style>

