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
        <div class="attributes attack" v-for="attack in card.attacks" :key="attack" @click="showModal(attack)">
          <h5 class="small-text">{{ attack.name }}</h5>
          <h3 class="chip" v-for="cost in attack.cost" :key="cost">
            {{ cost }}
          </h3>
        </div>
      </div>
    </div>
    <ModalAttack
      v-show="isModalVisible"
      @close="closeModal"
      :attack="attackSelected"
    />
  </div>
</template>

<script>
import Loader from '../components/Loader'
import ModalAttack from '../components/ModalAttack'
import { mapGetters } from 'vuex'

export default {
  name: 'Collection',
  components: {
    Loader,
    ModalAttack
  },
  computed: mapGetters({
    isLoading: 'isLoading',
    card: 'cardSelected'
  }),
  data () {
    return {
      isModalVisible: false,
      attackSelected: {},
    };
  },
  methods: {
    showModal(attack) {
      this.attackSelected = attack;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  async mounted() {
    await this.$store.dispatch('searchCardById', this.$route.params.id);
  }
}
</script>

<style lang="scss">
$shadow: 5px 5px 7px grey;

@mixin text {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color: #1d1d1d;
}

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
}

#image-card {
  max-width: 100%;
}

#image-card img {
  max-width: 20em;
  background-color: #ffffff;
  box-shadow: $shadow;
  border: none;
}

.detail-card {
  background-color: #ffffff;
  box-shadow: $shadow;
  border: solid;
  text-align: center;
  margin-top: 20px;
}

.small-text {
  @include text;
  font-size: 12px;
  line-height: 0px;
}

.large-text {
  @include text;
  font-style: italic;
  font-variant: small-caps;
  font-size: 25px;
  line-height: 20px;
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
  font-size: 12px;
  line-height: 0px;
  font-family: Verdana, sans-serif;
}

.attributes {
  border-top: solid;
}

.attack {
  background-color: wheat;
}

.attack:hover {
  cursor: pointer;
  background-color: tomato;
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