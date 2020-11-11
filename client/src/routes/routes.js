import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    redirect: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Dashboard.vue')
      },
      {
        path: '/lessons',
        name: 'lessons',
        component: () => import(/* webpackChunkName: "demo" */ '../dashboard_component/Lessons.vue')
      },
      {
        path: '/users',
        name: 'Users',
        component: () => import(/* webpackChunkName: "demo" */ '../dashboard_component/Users.vue')
      },
      {
        path: '/horses',
        name: 'Horses',
        component: () => import(/* webpackChunkName: "demo" */ '../dashboard_component/Horses.vue')
      },
      {
        path: '/admins',
        name: 'Admins',
        component: () => import(/* webpackChunkName: "demo" */ '../dashboard_component/Admins.vue')
      },
      {
        path: '/horse2rider',
        name: 'Horse2Rider',
        component: () => import(/* webpackChunkName: "demo" */ '../dashboard_component/Horse2Rider.vue')
      },
      {
        path: '/lessonsapply',
        name: 'LessonsApply',
        component: () => import(/* webpackChunkName: "demo" */ '../dashboard_component/LessonsApply.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views1/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ '../views1/Register.vue')
      },
      {
        path: '/resetpassword',
        name: 'ResetPassword',
        component: () => import(/* webpackChunkName: "demo" */ '../views1/PasswordRecovery.vue')
      },
      { path: '*', component: NotFound }
    ]
  },
  {
    path: '/',
    redirect: 'profile',
    component: Profile,
    children: [
      {
        path: '/myprofile',
        name: 'MyProfile',
        component: () => import(/* webpackChunkName: "demo" */ '../views1/MyProfile.vue')
      },
      { path: '*', component: NotFound }
    ]
  }
];

export default routes;
