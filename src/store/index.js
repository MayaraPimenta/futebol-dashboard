import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import round from './modules/round';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    round,
  },
});