import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardLayout from "../views/DashboardLayout.vue";
import Register from '../views/Register'
import Login from '../views/Login'
import Users from '../components/dashboard/Users.vue'
import Home from '../components/dashboard/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: "/dashboard/",
    meta: { requiresAuth: true },
    component: DashboardLayout,
    children: [
      { path: "", name: "dashboard", component: Home },
      { path: "users", name: "users", component: Users },
    ]
  },
  {
    path: '/register',
    name: "Register",
    component: Register,
    meta: { guest: true },
  },
  {
    path: '/login',
    name: "Login",
    component: Login,
    meta: { guest: true },
  },
  {
    path: "/",
    name: "homepage",
    meta: { guest: true },
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
