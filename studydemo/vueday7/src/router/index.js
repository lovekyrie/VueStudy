//模块的意思 是每一个Js都是单独的一个闭包，所以这里Vue需要重新引用
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import List from '../components/List.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:  [
    {path:'/home',component:Home},
    {path:'/list',component:List}
  ]
})
