<template>
  <div class="header">
    <slot></slot>  
    <i v-if="back" class="iconfont icon-fanhui" @click="goBack"></i>
  </div>
</template>

<script>
export default {
  props:{
    back:{
      type:Boolean,
      default:false,
    }
  },
  methods:{
    goBack(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang='less'>
  .header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color:lightblue;
    font-weight: bold;
    z-index: 199;
    i{
      position: absolute;
      left: 10px;
    }
  }
</style>
