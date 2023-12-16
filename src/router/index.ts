import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'pokemon-list',
    component: () => import(/* webpackChunkName: "pokemon-list" */ '@/views/pokemonList.vue')
  },
  {
    path: '/pokemon/:name',
    name: 'pokemon-detail',
    component: () => import(/* webpackChunkName: "pokemon-detail" */ '@/views/pokemonDetail.vue')
  }
  // to-do: add 404 page
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'not-found',
  //   component: () => import('@/views/notFound.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
