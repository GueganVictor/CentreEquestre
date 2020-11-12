import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardLayout from "../views/DashboardLayout.vue";

import Users from '../components/dashboard/Users.vue'
import Home from '../components/dashboard/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: "/dashboard/",

    component: DashboardLayout,
    children: [
      { path: "", name: "dashboard", component: Home },
      { path: "users", name: "users", component: Users },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/",
    name: "homepage",
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
