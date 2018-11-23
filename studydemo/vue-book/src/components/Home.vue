<template>
  <div id="app">
    <book-header :back="true">首页</book-header>
    <loading v-if="!loading"></loading>
    <template v-else>
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
    </template>
  </div>
</template>

<script>
import bookHeader from "../base/bookHeader";
import Swiper from "../base/Swiper";
import { getAll} from "../api";
import loading from '../base/loading'

export default {
  created() {
    this.getData()
  },
  data() {
    return {
      sliders: [],
      hotBooks: [],
      loading:false
    };
  },
  components: {
    bookHeader,
    Swiper,
    loading
  },
  methods: {
    async getData(){
      let [sliders,hotBooks]= await getAll()
      this.sliders=sliders;
      this.hotBooks=hotBooks;
      this.loading=true
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
