import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Devices from '../views/Devices.vue'
import Alerts from '../views/Alerts.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/dashboard', component: Dashboard },
  { path: '/devices', component: Devices },
  { path: '/alerts', component: Alerts }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
