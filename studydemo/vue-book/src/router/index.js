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
    {path:'/add',component:add},
    {path:'/collect',component:collect},
    {path:'/detail',component:detail},
    {path:'/home',component:home},
    {path:'/list',component:list}
  ]
})
