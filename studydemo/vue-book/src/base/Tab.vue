<template>
  <div class="footer">
    <router-link to="/home">
      <i class="iconfont icon-home"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/list">
      <i class="iconfont icon-liebiao"></i>
      <span>列表</span>
    </router-link>
    <router-link to="/collect">
      <i class="iconfont icon-shoucang"></i>
      <span>收藏</span>
    </router-link>
    <router-link to="/add">
      <i class="iconfont icon-tianjia"></i>
      <span>添加</span>
    </router-link>
  </div>
</template>

<script>
  
</script>

<style lang="less">
.footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    border-top: 1px solid #ccc;
    background-color: #ccc;
    a{
      display: flex;
      color: #0055dd;
      flex-direction: column;
      flex: 1;
      justify-content: center;
      align-items: center;
    }
    a.router-link-active{
      color: red;
    }
  }
</style>
