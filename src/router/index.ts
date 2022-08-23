import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: ()=>import('@/views/HomeView.vue')
  },
  {
    path: '/',
    name: 'settings',
    component: ()=>import('@/views/SettingsView.vue')
  },
  {
    path: '/',
    name: 'lifeMonitor',
    component: ()=>import('@/views/LifeMoniterView.vue')
  },
  {
    path: '/',
    name: 'manaMonitor',
    component: ()=>import('@/views/ManaMoniterView.vue')
  },
  {
    path: '/',
    name: 'flasksLoop',
    component: ()=>import('@/views/FlasksLoopView.vue')
  },
  {
    path: '/',
    name: 'cleanPackage',
    component: ()=>import('@/views/CleanPackageView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
