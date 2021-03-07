import Vue from 'vue'
import VueRouter from 'vue-router'
import Collection from '../views/Collection.vue'
import Details from '../views/Details.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'collection',
    component: Collection
  },
  {
    path: '/details/:id',
    name: 'details',
    component: Details
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
