import Vue from 'vue' //runtime不支持template 只支持render
import App from './app.vue'

import router from './router/index.js'
new Vue({
  router,
  el:'#app',
  render:(h)=>h(App)
})