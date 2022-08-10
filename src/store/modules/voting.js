import api from '@/api/voting';

export default {
    state: {
      average: []
    },

    getters: {
      votingAverage: (state) => state.average
    },

    actions: {
      async getVotes({ commit }) {
        try {
          await api.getVoteAverage().then((response) => {
            commit('GET_VOTES', response.data.data);
          });
        } catch (error) {
            commit('GET_VOTES', error);
        }
      }
    },

    mutations: {
      GET_VOTES(state, payload) {
        state.average = payload;
      }
    }
  };