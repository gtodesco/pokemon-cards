<template>
  <div class="content">
    <div id="search-container" class="search-container">
      <PokemonSearch />
    </div>
    <div id="text-container" class="page-container" v-show="!isLoading && !hasCards">
      <article>
        <h1>Welcome to Pokestore!</h1>
        <p>Search for a Pokémon in the input above.</p>
      </article>
    </div>
    <div id="loader-container" class="page-container" v-show="isLoading">
      <Loader />
    </div>
    <div id="cards-container" class="page-container" v-show="!isLoading && hasCards">
      <article class="card" v-for="card in cards" :key="card.id" @click="alert">
        <h4 class="card-text">{{card.name}}</h4>
        <picture>
          <img :src="card.image" alt="Pokémon" style="width: 150px;">
        </picture>
        <p class="card-text" v-for="type in card.types" :key="type">
          {{type}}
        </p>
        {{card.id}}
      </article>
    </div>
  </div>
</template>

<script>
import PokemonSearch from '../components/PokemonSearch'
import Loader from '../components/Loader'
import { mapGetters } from 'vuex'

export default {
  name: 'Collection',
  components: {
    PokemonSearch,
    Loader,
  },
  computed: mapGetters({
    cards: 'cards',
    hasCards: 'hasCards',
    isLoading: 'isLoading'
  }),
  data () {
    return {}
  },
  methods: {
    alert() {
      alert('teste');
    }
  }
}
</script>

<style>
.content {
  display: flex;
  justify-content: center;
}

.search-container {
  position: absolute;
  width: 90%;
}

.page-container {
  position: absolute;
  top: 12vh;
}

#text-container {
  font: italic small-caps 20px/30px fantasy;
  color: #1d1d1d
}

#cards-container {
  overflow: auto;
  max-height: 80vh;
  width: 90vw;
  display: grid;
  grid-gap: 35px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

.card {
  box-shadow: 5px 5px 7px grey;
  border: solid;
  background-color: #ffffff;
  width: 150px;
  cursor: pointer;
  text-align: center;
}

.card-text {
  margin: 2%;
  font: italic small-caps 20px/30px fantasy;;
}
</style>