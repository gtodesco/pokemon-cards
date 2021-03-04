import Vue from 'vue'
import Vuex from 'vuex'
import PokemonService from '../services/PokemonService'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    cards: [],
    isLoading: false,
    cardSelected: null
  },

  getters: {
    cards(state) {
      return state.cards;
    },
    isLoading(state) {
      return state.isLoading;
    }
  },

  mutations: {
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setCards(state, cards) {
      state.cards = cards;
    }
  },

  actions: {
    async searchCards(context, name = '') {

      context.commit('setIsLoading', true);

      let response = await PokemonService.getByName(name);

      const arrCards = response.data.map(({ id, name, types, images: { small } }) => ({
        id, 
        name, 
        types,
        image: small
      }));
    
      context.commit('setCards', arrCards);

      context.commit('setIsLoading', false);

    },

    updateCards(context, cards) {
      context.commit('setCards', cards);
    }
  },

})
