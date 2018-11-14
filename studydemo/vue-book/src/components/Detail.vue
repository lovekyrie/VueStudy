<template>
  <div class="detail">
    <book-header :back="back">详情页</book-header>
    <ul>
      <li>
        <label for="bookName">书的名称</label>
        <input type="text" v-model="book.bookName">
      </li>
      <li>
        <label for="bookInfo">书的信息</label>
        <input type="text" v-model="book.bookInfo">
      </li>
      <li>
        <label for="bookPrice">书的价格</label>
        <input type="text" v-model.number="book.bookPrice">
      </li>
    </ul>
    <button @click="update">确定修改</button>
  </div>
</template>

<script>
import bookHeader from '../base/bookHeader'
import {getOneBook,updateBook} from '../api'

export default {
  data(){
    return {
      back:true,
      book:{}
    }
  },
  watch:{
    //只要路径变化，重新获取数据
    $route(){
      this.getData()
    }
  },
  created() {
    
    this.getData()
  },
  methods: {
    async getData(){
      this.book=await getOneBook(this.bid);
      //当book为空的时候，需要重新跳转到list页面
      Object.keys(this.book).length>0?void 0:this.$router.push('/list')
    },
    async update(){
      await updateBook(this.bid,this.book)
      this.$router.push('/list')
    }
  },
  computed:{
    bid(){
      return this.$route.params.bid
    }
  },
  components:{
    bookHeader,
  }
}
</script>

<style lang='less' scoped>
.detail{
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 100;
}
</style>
