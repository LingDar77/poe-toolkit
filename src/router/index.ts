import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: ()=>import('@/views/HomeView.vue')
  },
  {
    path: '/settings',
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
    name: 'flasksLoops',
    component: ()=>import('@/views/FlasksLoopsView.vue')
  },
  {
    path: '/',
    name: 'cleanPackage',
    component: ()=>import('@/views/CleanPackageView.vue')
  },
  {
    path: '/',
    name: 'timeRecorder',
    component: ()=>import('@/views/TimeRecorderView.vue')
  },
  {
    path: '/',
    name: 'itemQueryer',
    component: ()=>import('@/views/ItemQueryerView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
