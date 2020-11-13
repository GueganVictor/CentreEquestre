import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardLayout from "../views/DashboardLayout.vue";
import Register from '../views/Register'
import Login from '../views/Login'
<<<<<<< HEAD
=======
<<<<<<< HEAD
import Posts from '../views/Posts'
=======
>>>>>>> 8b46794c4032994673c75c88f2f9256e8836f3e7
import Horses from '../views/Horses'
import Admins from '../views/Admins'
import Lessons from '../views/Lessons'
import About from '../views/About'
<<<<<<< HEAD
import HorseRider from '../views/HorseRider'
import InstructorAdmin from '../views/InstructorAdmin'
=======
>>>>>>> db16045750c7e973cf86a57ba0855262d140a44d
>>>>>>> 8b46794c4032994673c75c88f2f9256e8836f3e7
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
    path: '/posts',
    name: "Posts",
    component: Posts,
=======
>>>>>>> 8b46794c4032994673c75c88f2f9256e8836f3e7
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
<<<<<<< HEAD
    path: '/instructoradmin',
    name: "InstructorAdmin",
    component: InstructorAdmin,
   meta: {requiresAuth: true}
  },
  {
    path: '/apply_lesson',
    name: "ApplyLesson",
    component: HorseRider,
   meta: {requiresAuth: true}
  },
  {
    path: '/horses',
    name: "Horses",
    component: Horses,
=======
    path: '/horses',
    name: "Horses",
    component: Horses,
>>>>>>> db16045750c7e973cf86a57ba0855262d140a44d
>>>>>>> 8b46794c4032994673c75c88f2f9256e8836f3e7
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 8b46794c4032994673c75c88f2f9256e8836f3e7
    path: '/about',
    name: "About",
    component: About,
   meta: {requiresAuth: true}
  },
  {
<<<<<<< HEAD
=======
>>>>>>> db16045750c7e973cf86a57ba0855262d140a44d
>>>>>>> 8b46794c4032994673c75c88f2f9256e8836f3e7
    path: "/",
    name: "homepage",
    meta: { guest: true },
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
<<<<<<< HEAD
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

=======
<<<<<<< HEAD
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

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/posts");
      return;
    }
    next();
  } else {
    next();
  }
});
=======
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

>>>>>>> db16045750c7e973cf86a57ba0855262d140a44d
>>>>>>> 8b46794c4032994673c75c88f2f9256e8836f3e7

export default router
