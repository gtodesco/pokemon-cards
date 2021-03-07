<template>
  <div class="search">
    <input 
      id="search-input"
      v-model="search" 
      placeholder="Search Pokémon" 
      @keypress.enter="searchPokemon"/>
      <button 
        id="search-button"
        @click="searchPokemon">
        <i class="fa fa-search"></i>
      </button>
  </div>
</template>

<script>
export default {
  name: 'PokemonSearch',
  data () {
    return {
        search: ''
    }
  },
  methods: {
    async searchPokemon() {
      await this.$store.dispatch('searchCards', this.search);
    }
  }
}
</script>

<style lang="scss">
$shadow: 0px 2px 7px grey;
$border: 1px solid #707070;
$border-radius: 10px;

.search {
  display: flex;
  height: 3rem;
  width: 100%;
}

#search-input {
  width: 100%;
  box-shadow: $shadow;
  border-top-left-radius: $border-radius;
  border-bottom-left-radius: $border-radius;
  border-right: none;
  padding: 10px;
  border: $border;
}

#search-input:focus {
  outline: none;
  border-color: #ff0000;
}

#search-button {
  width: 5rem;
  color: #ffffff;
  background-color: #ff0000;
  box-shadow: $shadow;
  border-top-right-radius: $border-radius;
  border-bottom-right-radius: $border-radius;
  border-left: none;
  border: $border;
}

#search-button:focus {
  outline: none;
}

#search-button:hover {
  background-color: #ca2727;
  cursor: pointer;
}
</style>