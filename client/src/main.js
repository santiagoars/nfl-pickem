import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

Vue.use(BootstrapVue)

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

