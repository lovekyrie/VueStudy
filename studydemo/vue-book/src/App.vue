<template>
  <div id="app">
    <keep-alive>
     <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
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
  position: relative;
  margin-bottom: 50px;
  top: 40px;
  left: 0;
  width: 100%;
}

img{
  width: 100%;
}
</style>
