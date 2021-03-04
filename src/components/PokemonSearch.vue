<template>
  <div class="search">
    <input 
      id="search-field"
      v-model="search" 
      placeholder="Search Pokémon" 
      @keypress.enter="searchPokemon"/>
      <button 
        id="search-button" 
        class="btn" 
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

<style scoped>
.search {
  display: flex;
  height: 3rem;
}

#search-field {
  width: 100%;
  box-shadow: 0px 2px 7px grey;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-right: none;
  padding: 10px;
  border: 1px solid #707070;
}

#search-button {
  width: 5rem;
  color: #ffffff;
  background-color: #ff0000;
  box-shadow: 0px 2px 7px grey;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left: none;
  border: 1px solid #707070;
}

#search-button:hover {
  background-color: #ca2727;
  cursor: pointer;
}
</style>