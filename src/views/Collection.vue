<template>
  <div class="content">
    <div id="search-container" class="search-container">
      <PokemonSearch />
    </div>
    <div id="text-container" class="page-container" v-show="!isLoading && !hasCards">
      <article>
        <h1>Welcome to Pokestore!</h1>
        <p>Search for a Pokémon in the input above.</p>
        <h5>{{ $t('CODES.internacionalization_test') }}</h5>
      </article>
    </div>
    <div id="loader-container" class="page-container" v-show="isLoading">
      <Loader />
    </div>
    <div id="cards-container" class="page-container" v-show="!isLoading && hasCards">
      <article 
        class="card" 
        v-for="card in cards" 
        :key="card.id" 
        @click="goToDetails(card.id)"
      >
        <h4 class="card-text">{{card.name}}</h4>
        <picture>
          <img class="card-picture" :src="card.image" alt="Pokémon">
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
    goToDetails(id) {
      this.$router.push({
        name: 'details',
        params: { id },
      });
    }
  }
}
</script>

<style lang="scss">
@mixin card-list {
  overflow: auto;
  max-height: 80vh;
  width: 90vw;
}

@mixin text {
  font-style: italic;
  font-variant: small-caps;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 20px;
  line-height: 30px;
  color: #1d1d1d;
}

.content {
  display: flex;
  justify-content: center;
  text-align: center;
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
  @include text;
}

#cards-container {
  @include card-list;
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

.card-picture {
  width: 150px;
}

.card-text {
  margin: 2%;
  @include text;
}

@media only screen and (max-width: 768px) {
  .page-container {
    top: 22vh;
  }

  #cards-container {
    @include card-list;
    display: flex;
    grid-gap: 35px;
  }
}
</style>