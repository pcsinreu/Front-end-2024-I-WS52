import MainLoginComponent from '@/components/main-login.component.vue'
import ListUserComponent from '@/components/list-user.component.vue'
import { createRouter, createWebHistory } from 'vue-router'
import CreateUserComponent from '@/components/create-user.component.vue'
import NotFoundComponent from '@/components/not-found.component.vue'

const routes = [
  { path: '/', component: MainLoginComponent },
  { path: '/users', component: ListUserComponent },
  { path: '/create-user', component: CreateUserComponent },
  { path: '/:pathMatch(.*)*', component: NotFoundComponent }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
