import { createWebHistory, createRouter } from "vue-router";
// Views
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import PasswordRecovery from "@/views/PasswordRecovery.vue";
import DashboardRider from "@/views/DashboardRider.vue";
import DashboardAdmin from "@/views/DashboardAdmin.vue";
import DashboardSuperUser from "@/views/DashboardSuperUser.vue";
import DashboardInstructor from "@/views/DashboardInstructor.vue";
import MyProfile from "@/views/MyProfile.vue";
// Components
import HomeRider from "@/components/HomeRider.vue"
import LessonsAvailable from "@/components/LessonsAvailable.vue"
import HomeAdmin from "@/components/HomeAdmin.vue"
import Horses from "@/components/Horses.vue"
import Users from "@/components/Users.vue"
import HomeSuperUser from "@/components/HomeSuperUser.vue"
import Admins from "@/components/Admins.vue"
import HomeInstructor from "@/components/HomeInstructor.vue"
import Horse2Rider from "@/components/Horse2Rider.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/password_recovry",
    name: "Password Recovery",
    component: PasswordRecovery,
  },
  {
    path: "/dashboardRider",
    component: DashboardRider,
    children: [
      { path: "", name: "DashboardRider", component: HomeRider },
      { path: "lessons", name: "LessonsAvailable", component: LessonsAvailable },
    ]
  },
  {
    path: "/dashboardAdmin",
    component: DashboardAdmin,
    children: [
      { path: "", name: "DashboardAdmin", component: HomeAdmin },
      { path: "horses", name: "Horses", component: Horses },
      { path: "users", name: "users", component: Users },
    ]
  },
  {
    path: "/dashboardSuperUser",
    component: DashboardSuperUser,
    children: [
      { path: "", name: "DashboardSuperUser", component: HomeSuperUser },
      { path: "admins", name: "Admins", component: Admins },
    ]
  },
  {
    path: "/dashboardInstructor",
    component: DashboardInstructor,
    children: [
      { path: "", name: "DashboardInstructor", component: HomeInstructor },
      { path: "horse2Rider", name: "Horse2Rider", component: Horse2Rider },
    ]
  },
  {
    path: "/my_profile",
    name: "MyProfile",
    component: MyProfile,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;