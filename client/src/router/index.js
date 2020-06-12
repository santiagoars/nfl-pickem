import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '..//components/Dashboard.vue'
import GameContainer from '../components/GameContainer.vue'
import WeekContainer from '../components/WeekContainer.vue'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/game-container',
      name: 'game-container',
      component: GameContainer
    },
    {
      path: '/week-container',
      name: 'week-container',
      component: WeekContainer
    },
    {
      path: '/',
      name: 'login',
      component: Login
    }
  ]
  
  const router = new VueRouter({
    mode: 'history',
    routes
  })

  export default router