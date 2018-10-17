<template>
  <div>
    <div class="notify">{{value}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value:'我太帅了'
    }
  }
}
</script>

<style scoped>
.notify{
  width: 100px;
  height: 40px; 
  background-color: rgba(0,0,0,.25);
  border-radius: 15px;
  text-align: center;
  line-height: 40px;
  color: #fff;
}
</style>
