<template>
  <div class="details-content">
    <div id="loader-container" class="page-container" v-show="isLoading">
      <Loader />
    </div>
    <div id="div-back-button" v-show="!isLoading">
      <button id="back-button" @click="$router.go(-1)">
        <i class="fa fa-arrow-left"></i>
      </button>
    </div>
    <div id="card-container" class="page-container" v-show="!isLoading">
      <div id="image-card">
        <picture>
          <img :src="card.image" alt="Pokémon">
        </picture>
      </div>
      <div id="about-card" class="detail-card">
        <h5 class="small-text">{{ card.id }}</h5>
        <h2 class="large-text">{{ card.name }}</h2>
        
        <div class="chip" v-for="type in card.types" :key="type">
          {{ type }}
        </div>

        <div class="attributes">
          <h5 class="small-text">Resistances</h5>
          <h3 class="large-text" v-for="resistance in card.resistances" :key="resistance.type">
            {{ resistance.type }} {{ resistance.value }}
          </h3>
        </div>
        <div class="attributes">
          <h5 class="small-text">Weaknesses</h5>
          <h3 class="large-text" v-for="weakness in card.weaknesses" :key="weakness.type">
            {{ weakness.type }} {{ weakness.value }}
          </h3>
        </div>
      </div>
      <div id="attack-card" class="detail-card">
        <h2 class="large-text">Attacks</h2>
        <div class="attributes" v-for="attack in card.attacks" :key="attack">
          <h5 class="small-text">{{ attack.name }}</h5>
          <h3 class="chip" v-for="cost in attack.cost" :key="cost">
            {{ cost }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '../components/Loader'
import { mapGetters } from 'vuex'

export default {
  name: 'Collection',
  components: {
    Loader,
  },
  computed: mapGetters({
    isLoading: 'isLoading',
    card: 'cardSelected'
  }),
  async mounted() {
    await this.$store.dispatch('searchCardById', this.$route.params.id);
  }
}
</script>

<style>
.details-content {
  display: flex;
  justify-content: center;
}

.page-container {
  position: absolute;
  top: 15vh;
}

#div-back-button {
  position: absolute;
}

#back-button {
  border-radius: 20px;
  border: solid;
  width: 20em;
  height: 2em;
  cursor: pointer;
}

#back-button:focus {
  outline: none;
}

#card-container {
  overflow: auto;
  max-height: 80vh;
  width: 90vw;
  cursor: pointer;
}

#image-card {
  max-width: 100%;
}

#image-card img {
  max-width: 20em;
  background-color: #ffffff;
  box-shadow: 5px 5px 7px grey;
  border: none;
}

.detail-card {
  background-color: #ffffff;
  box-shadow: 5px 5px 7px grey;
  border: solid;
  text-align: center;
  margin-top: 20px;
}

.small-text {
  font: 12px/0px fantasy;
  color: #1d1d1d;
}

.large-text {
  font: italic small-caps 25px/20px fantasy;
  color: #1d1d1d;
}

.chip {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  background-color: #8188eb;
  color: white;
  border-radius: 9999px;
  padding: 10px 8px;
  margin: 2px;
  font: 12px/0px cursive;
}

.attributes {
  border-top: solid;
}

@media only screen and (min-width: 769px) {
  #card-container {
    display: flex;
  }

  .detail-card {
    margin: 20px;
    width: 20em;
  }
}

</style>