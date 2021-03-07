import Vue from 'vue'
import Vuex from 'vuex'
import PokemonService from '../services/PokemonService'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    cards: [],
    isLoading: false,
    cardSelected: {}
  },

  getters: {
    cards(state) {
      return state.cards;
    },
    hasCards(state) {
      return state.cards.length > 0 ? true : false;
    },
    isLoading(state) {
      return state.isLoading;
    },
    cardSelected(state) {
      return state.cardSelected;
    }
  },

  mutations: {
    setCards(state, cards) {
      state.cards = cards;
    },
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setCardSelected(state, card) {
      state.cardSelected = card;
    }
  },

  actions: {
    async searchCards(context, name = '') {

      context.commit('setIsLoading', true);

      const response = await PokemonService.getByName(name);

      const arrCards = response.data.map(({ id, name, types, images: { small } }) => ({
        id, 
        name, 
        types,
        image: small
      }));
    
      context.commit('setCards', arrCards);

      context.commit('setIsLoading', false);

    },

    async searchCardById(context, idCard) {
      context.commit('setIsLoading', true);

      const response = await PokemonService.getById(idCard);

      const { 
        id, 
        name, 
        types, 
        resistances, 
        weaknesses, 
        attacks, 
        images: { large } } = response.data;

      context.commit('setCardSelected', {
        id, 
        name, 
        types, 
        resistances, 
        weaknesses, 
        attacks,
        image: large
      });

      context.commit('setIsLoading', false);

    }

  },

})
