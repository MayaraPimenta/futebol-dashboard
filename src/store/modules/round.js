import api from '@/api/round';

export default {
    state: {
      rounds: [],
    },

    getters: {
      allRounds: (state) => state.rounds,
    },

    actions: {
      async getAllRounds({ commit }) {
        const response = await api.getRound();

        commit('GET_ROUND', response.data);
      }
    },

    mutations: {
      GET_ROUND(state, payload) {
        state.rounds = payload;
      }
    }
  };