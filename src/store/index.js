import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import round from './modules/round';
import players from './modules/players';
import voting from './modules/voting';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    round,
    players,
    voting,
  },
});