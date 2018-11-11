<template>
  <div id="app">
    <book-header>列表页</book-header>
    <div class="content">
      <ul>
        <li v-for="(item, index) in books" :key="index">
          <img :src="item.bookCover">
          <div>
            <h4>{{item.bookName}}</h4>
            <p>{{item.bookInfo}}</p>
            <span>{{item.bookPrice}}</span>
            <button @click="removeBook(item.bookId)">删除</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import bookHeader from "../base/bookHeader";
import {getBooks,deleteBook} from "../api";

export default {
  data() {
    return {
      books: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      this.books= await getBooks()
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
