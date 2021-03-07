import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'

const messages = require('./translations/pt_BR')

Vue.config.productionTip = false

// Teste de suporte para internacionalização.
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'pt_BR',
  messages
});

new Vue({
  router,
  store,
  i18n,
  render: function (h) { return h(App) }
}).$mount('#app')
