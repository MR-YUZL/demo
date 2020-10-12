import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'one',
      component: () => import('@/views/one/one')
    }
  ]
})
