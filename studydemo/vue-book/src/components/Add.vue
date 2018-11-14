<template>
  <div id="app">
    <book-header>添加</book-header>
    <div class="content">
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
         <li>
          <label for="bookCover">书的封面</label>
          <input type="text" v-model="book.bookCover">
        </li>
      </ul>
      <button @click="save">保存</button>
    </div>
  </div>
</template>

<script>
import bookHeader from "../base/bookHeader";
import { addBook } from "../api";
export default {
  data() {
    return {
      book: {}
    };
  },
  methods: {
    async save() {
      await addBook(this.book);
      this.$router.push("/list");
    }
  },
  components: {
    bookHeader
  }
};
</script>

<style lang='less' scoped>
.content{
  ul{
    margin: 40px 0;
    padding:  0 20px;
    display: flex;
    flex-flow: row wrap;
    li{
      flex: 1 0 100%;
      display: flex;
      flex-flow: row wrap;
      label,input{
        flex: 1 0 100%;
      }
      input{
        border:  1px solid #ccc;
        padding: 10px 0;
        outline: none;
      }
      &:not(:nth-last-of-type(1)){
        margin-bottom: 30px;
      }
    }
  }
  button{
    width: 100%;
    padding: 10px 0;
    text-align: center;
    background-color: lightblue;
    color: #fff;
  }
}
</style>
