import Vue from 'vue' //runtime不支持template 只支持render
import App from './app.vue'

import router from './router/index.js'
import notify from './plugin/notify.js'
Vue.use(notify)

new Vue({
  router,
  el:'#app',
  render:(h)=>h(App)
})