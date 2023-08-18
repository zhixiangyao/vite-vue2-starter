import Vue from 'vue'

import { pinia } from '/@/stores'
import router from '/@/router'
import App from './App'

import '/@/styles/global.css'

const app = new Vue({
  pinia,
  router,
  render: (h) => h(App),
})

app.$mount('#app')
