import Vue from 'vue'
import Vuex from 'vuex'
import PokemonService from '../services/PokemonService'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    cards: [],
    cardSelected: null
  },

  getters: {
    cards(state) {
      return state.cards;
    }
  },

  mutations: {
    setCards(state, cards) {
      state.cards = cards;
    }
  },

  actions: {
    async searchTasks(context, name = '') {

      let response = await PokemonService.getByName(name);

      context.commit('setCards', response.data);

    }
  },

})
