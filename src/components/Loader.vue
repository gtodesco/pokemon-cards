<template>
  <div class='loader' v-show="show" />
</template>

<script>
export default {
  name: 'Loader',
  props: ['show'],
}
</script>

<style>
.loader {
  border: 16px solid #ff0000;
  border-radius: 50%;
  border-top: 16px solid #000000;
  border-left-color: #ffffff;
  border-right-color: #ffffff;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>