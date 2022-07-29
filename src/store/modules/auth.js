import api from '@/api/auth';
import { setAuthHeader } from '@/config/axios/index';
import router from '@/router';

export default {
    state: {
      userToken: null,
      authenticated: false,
    },

    getters: {
      isLoggedIn: (state) => state.authenticated,
      userToken: (state) => state.userToken
    },

    actions: {
      async loginUser({ commit }, data) {
        try {
            const response = await api.userLogin(data.email, data.password);

            setAuthHeader(response.data.data.token);

            sessionStorage.setItem('user_token',response.data.data.token);

            commit('SET_USER_LOGIN', response.data.data.token);

            router.push('/');
        } catch (error) {
            commit('USER_LOGIN_ERROR', null);
        }
      }
    },

    mutations: {
      SET_USER_LOGIN(state, payload) {
        state.userToken = payload;
        state.authenticated = true;
      },

      USER_LOGIN_ERROR(state, payload) {
        state.userToken = payload;
      },
    }
  };