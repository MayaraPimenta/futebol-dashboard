/* eslint-disable vue/require-name-property */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { setAuthHeader } from '@/config/axios/index.js';

Vue.config.productionTip = false;

new Vue({
  router,
  store,

  created() {
    const token = sessionStorage.getItem('user_token');

    if(token) {
      setAuthHeader(token);
    }
  },

  render: function (h) {
    return h(App);
  },
}).$mount('#app');
