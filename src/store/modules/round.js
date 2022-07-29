import api from '@/api/round';

export default {
  state: {
    rounds: [],
  },

  getters: {
    activeRound: (state) => state.rounds !== undefined ? state.rounds.find(el => el.isActive === true) : []
  },

  actions: {
    async getAllRounds({ commit }) {
      try {
        const response = await api.getRound();

        commit('GET_ROUND', response.data.data);
      } catch (error) {
        commit('GET_ROUND', null);
      }
    },
  },

  mutations: {
    GET_ROUND(state, payload) {
      state.rounds = payload;
    },
  },
};
