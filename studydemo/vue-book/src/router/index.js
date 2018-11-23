import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import add from '../components/Add.vue'
import collect from '../components/Collect.vue'
import detail from '../components/Detail.vue'
import home from '../components/Home.vue'
import list from '../components/List.vue'

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/add',component:add},
    {path:'/collect',component:collect},
    // /detail/1 {bid:1}路径参数 必须有到那时可以随机
    {path:'/detail/:bid',component:detail,name:'detail'},
    {path:'/home',component:home,meta:{
      keepAlive:true
    }},
    {path:'/list',component:list},
    {path:'*',redirect:'/home'}
  ]
})
