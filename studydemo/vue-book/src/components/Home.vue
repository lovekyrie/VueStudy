<template>
  <div id="app">
    <book-header :back="true">首页</book-header>
    <div class="content">
      <Swiper :swiperSlides="sliders"></Swiper>
    </div>
  </div>
</template>

<script>
import bookHeader from "../base/bookHeader";
import Swiper from "../base/Swiper";
import { getSliders ,getHotBook} from "../api";

export default {
  created() {

    this.getSlider();
    this.getHot();
  },
  data() {
    return {
      sliders: [],
      hotBooks:[],
    };
  },
  components: {
    bookHeader,
    Swiper
  },
  methods: {
    async getSlider() {
      let data= await getSliders();
      console.log(sliders);
      this.sliders = data;
    },
    async getHot(){
      let data=await getHotBook();
      this.hotBooks=data;
    }
  }
};
</script>

<style>
</style>
