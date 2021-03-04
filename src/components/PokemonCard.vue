<template>
  <div class="card">
    {{ pokemon }}
  </div>
</template>

<script>
export default {
  name: 'PokemonCard',
  props: ['pokemon'],
}
</script>

<style scoped>
.card {
  flex: 0 0 20em;
  height: 20em;
  margin: 1em;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.1em dashed #000;
}
</style>