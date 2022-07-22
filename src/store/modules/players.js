import api from '@/api/players';

export default {
    state: {
      players: [],
    },

    getters: {
      allPlayers: (state) => state.players,
    },

    actions: {
      async getAllPlayers({ commit }) {
        const response = await api.getPlayers();

        commit('GET_PLAYERS', response.data.data);
      }
    },

    mutations: {
      GET_PLAYERS(state, payload) {
        state.players = payload;
      }
    }
  };