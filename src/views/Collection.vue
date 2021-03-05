<template>
  <div>
      <PokemonSearch />
      <div class='content'>
        <div class='div-loader' v-show="isLoading">
          <Loader />
        </div>
        <div class='cards' v-show="!isLoading">
          <transition-group
            class='carousel'
            tag="div">
            <div
              v-for="card in cards"
              :key="card.id"
              class='carousel-item'>
              <PokemonCard :pokemon="card"/>
            </div>
          </transition-group>
          <div class='carousel-controls'>
            <button class='carousel-controls__button' @click="previous">prev</button>
            <button class='carousel-controls__button' @click="next">next</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import PokemonSearch from '../components/PokemonSearch'
import Loader from '../components/Loader'
import PokemonCard from '../components/PokemonCard'
import { mapGetters } from 'vuex'

export default {
  name: 'Collection',
  components: {
    PokemonSearch,
    Loader,
    PokemonCard
  },
  computed: mapGetters({
    cards: 'cards',
    isLoading: 'isLoading'
  }),
  data () {
    return {}
  },

  methods: {
    next () {
      const first = this.cards.shift()
      this.$store.dispatch('updateCards', this.cards.concat(first));
    },
    previous () {
      const last = this.cards.pop()
      this.$store.dispatch('updateCards', [last].concat(this.cards));
    },
  }
}
</script>

<style>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.div-loader {
  margin-top: 5rem;
}

.cards {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
  width: 24em;
  min-height: 25em;
}

.carousel-item {
  flex: 0 0 20em;
  transition: transform 0.3s ease-in-out;
}

.carousel-item:first-of-type {
  opacity: 0;
}

.carousel-item:last-of-type {
  opacity: 0;
}
</style>