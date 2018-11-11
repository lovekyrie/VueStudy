<template>
  <div id="app">
    <book-header :back="true">首页</book-header>
    <div class="content">
      <Swiper :swiperSlides="sliders"></Swiper>
      <div class="container">
        <h3>热门图书</h3>
        <ul>
          <li v-for="(item, index) in hotBooks" :key="index">
            <img :src="item.bookCover">
            <b>{{item.bookName}}</b>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import bookHeader from "../base/bookHeader";
import Swiper from "../base/Swiper";
import { getSliders, getHotBook } from "../api";

export default {
  created() {
    this.getSlider();
    this.getHot();
  },
  data() {
    return {
      sliders: [],
      hotBooks: []
    };
  },
  components: {
    bookHeader,
    Swiper
  },
  methods: {
    async getSlider() {
      let data = await getSliders();
      console.log(data);
      this.sliders = data;
    },
    async getHot() {
      let data = await getHotBook();
      this.hotBooks = data;
    }
  }
};
</script>

<style scoped lang='less'>
h3 {
  color: #999;
  padding: 5px 0;
}
.container {
  width: 90%;
  margin: 0 auto;
  ul {
    display: flex;
    flex-flow: row wrap;
    li {
      flex: 1 0 50%;
      text-align: center;
      img {
        width: 100%;
      }
    }
  }
}
</style>
