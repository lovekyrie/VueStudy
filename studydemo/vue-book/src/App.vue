<template>
  <div id="app">
   <router-view></router-view>
   <tab></tab>
  </div>
</template>

<script>
import Tab from './base/Tab'

export default {
  name:'app',
  data(){
    return {

    }
  },
  components:{
    Tab,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

ul,li{
  list-style: none;
}
a{
  text-decoration: none;
}
input,button{
  -webkit-appearance: none;
}

.content{
  position: fixed;
  top: 40px;
  left: 0;
  height: 100px;
  width: 100%;
}

img{
  width: 100%;
}
</style>
