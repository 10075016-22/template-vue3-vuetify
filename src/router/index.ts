import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import { userStore } from '@/store/auth/userStore'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/components/auth/login/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/HomeView.vue')
  },
  {
    path: '/dashboard/usuarios',
    name: 'dashboard-usuarios',
    component: () => import('@/views/usuarios/Usuarios.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from) => {
    const { authenticated } = userStore()
    if (to.name !== 'Login' && !authenticated) {
      return { name: 'Login' }
    }
    // Si estamos en el login y hay sesion activa, lo mandamos al dashboard
    if (to.name === 'Login' && authenticated) {
      return { name: 'dashboard' }
    }
})

export default router