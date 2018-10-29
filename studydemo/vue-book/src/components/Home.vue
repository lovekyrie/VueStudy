<template>
  <div id="app">
    <book-header :back="true">首页</book-header>
    <div class="content">
      <Swiper :swiperSlides="sliders"></Swiper>
    </div>
  </div>
</template>

<script>
import bookHeader from '../base/bookHeader'
import Swiper from '../base/Swiper'
import {getSliders} from '../api'

export default {
  async created() {
   let{data:sliders} =await getSliders();
   console.log(sliders);
   this.sliders=sliders;
  },
  data(){
    return {
      sliders:[],
    }
  },
  components:{
    bookHeader,
    Swiper,
  }
}
</script>

<style>

</style>
