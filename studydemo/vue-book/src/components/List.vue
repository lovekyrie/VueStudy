<template>
  <div id="app">
    <book-header>列表页</book-header>
    <div class="content" ref="scroll" @scroll.native="LoadMore">
      <ul>
        <router-link v-for="(item, index) in books" :key="index"
        :to="{name:'detail',params:{bid:item.bookId}}" tag="li">
          <img :src="item.bookCover">
          <div>
            <h4>{{item.bookName}}</h4>
            <p>{{item.bookInfo}}</p>
            <span>{{item.bookPrice}}</span>
            <!-- 在删除某个图书的时候，阻止冒泡 -->
            <button @click.stop="removeBook(item.bookId)">删除</button>
          </div>
        </router-link>
      </ul>
      <p @click="LoadingMore">加载更多...</p>
    </div>
  </div>
</template>

<script>
import bookHeader from "../base/bookHeader";
import {pagination,deleteBook} from "../api";

export default {
  data() {
    return {
      books: [],
      hasMore:true,
      offset:0,
      isLoading:false
    };
  },
  created() {
    this.getData();
  },
  methods: {
    //下滑实现加载
    LoadMore(){
      // clearTimeout(this.timer)
      // this.timer=setTimeout(()=>{
      //   //scrool
      //   let {scrollTop,clientHeight,scrollHeight}=this.$refs.scroll
      //   if(scrollTop+clientHeight+20>scrollHeight){
      //     this.getData()
      //   }
      // },13)
      console.log(1000)
    },
    //借助按钮
    LoadingMore(){
      this.getData()
    },
    async getData() {
      if(this.hasMore && !this.isLoading){
        this.isLoading=true
        let {hasMore,books}= await pagination(this.offset)
        this.isLoading=false
        this.books=[...this.books,...books];
        this.hasMore=hasMore;
        this.offset=this.books.length;
      }
    },
   async removeBook(bookId){
      //前后端都需要删除
      await deleteBook(bookId)
      this.books=this.books.filter(item=>item.bookId!==bookId)
    }
  },
  components: {
    bookHeader
  }
};
</script>

<style lang='less'>
.content{
  ul{
    padding: 10px 0;
    li{
      display: flex;
      padding: 10px 0;
      img{
        width: 130px;
        height: 150px;
      }
      div{
        flex: 1;
        display: flex;
        flex-flow: row wrap;
        h4{
          font-size: 20px;
        }
        p{
          color: #2a2a2a;
        }
        span{
          color: #f00;
          flex: 1 0 100%;
        }
        button{
          flex: 0 0 30%;
          background-color: orangered;
          color: #fff;
          border-radius: 5px;
          outline: none;
        }
      }
    }
  }

}
</style>
