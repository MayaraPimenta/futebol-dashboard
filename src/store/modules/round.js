import api from '@/api/round';

export default {
    state: {
      rounds: [],
    },

    getters: {
      activeRound: (state) => state.rounds !== undefined ? state.rounds.data.find(el => el.isActive === true) : []
    },

    actions: {
      async getAllRounds({ commit }) {
        const response = await api.getRound();

        commit('GET_ROUND', response.data);

        return response.data;
      }
    },

    mutations: {
      GET_ROUND(state, payload) {
        state.rounds = payload;
      }
    }
  };