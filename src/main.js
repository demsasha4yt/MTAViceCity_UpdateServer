// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Vuetify);
// Vue.use(VuetifyConfirm);

new Vue({
  el: '#app',
  publicPath: '/administration',
  router,
  store,
  components: { App },
  template: '<App/>'
})
