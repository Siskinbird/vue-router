import Vue from 'vue'
import App from './App.vue'
import './assets/scss/main.scss'
import router from './router'
import {Vuelidate} from "vuelidate";

//Plugins
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
