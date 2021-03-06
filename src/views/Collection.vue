<template>
  <div class="content">
    <div id="search-container" class="search-container">
      <PokemonSearch />
    </div>
    <div id="text-container" class="page-container" v-show="!isLoading && !hasCards">
      <h1>Welcome to Pokestore!</h1>
      <p>Search for a Pokémon in the input above.</p>
    </div>
    <div id="loader-container" class="page-container" v-show="isLoading">
      <Loader />
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
    hasCards: 'hasCards',
    isLoading: 'isLoading'
  }),
  data () {
    return {}
  },
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
  top: 15vh;
}

#text-container {
  font: italic small-caps 20px/30px fantasy;
  color: #1d1d1d
}
</style>