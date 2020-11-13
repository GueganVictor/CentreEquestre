import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardLayout from "../views/DashboardLayout.vue";
import Register from '../views/Register'
import Login from '../views/Login'
import Horses from '../views/Horses'
import Admins from '../views/Admins'
import Lessons from '../views/Lessons'
import About from '../views/About'
import Users from '../components/dashboard/Users.vue'
import Home from '../components/dashboard/Home.vue'
import store from "../store";
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
    path: '/admins',
    name: "Admins",
    component: Admins,
   meta: {requiresAuth: true}
  },
  {
    path: '/lessons',
    name: "Lessons",
    component: Lessons,
   meta: {requiresAuth: true}
  },
  {
    path: '/horses',
    name: "Horses",
    component: Horses,
   meta: {requiresAuth: true}
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
    path: '/about',
    name: "About",
    component: About,
   meta: {requiresAuth: true}
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

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})


export default router
