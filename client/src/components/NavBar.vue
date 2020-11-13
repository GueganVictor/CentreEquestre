<template>
  <div id="nav">
    <router-link to="/">Home </router-link>  |
    <div v-if="User">
      <router-link v-if="User.role == 'superuser'" to="/admins"
        >Admins</router-link 
      > |
      <router-link
        v-if="User.role == 'admin' || User.role == 'superuser'"
        to="/instructoradmin"
        >InstructorAdmin
      </router-link> |
      <router-link v-if="User.role != 'rider'" to="/horses"
        >Horses
      </router-link> |
      <router-link v-if="User.role != 'rider'" to="/lessons"
        >Lessons
      </router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/apply_lesson">Apply lesson</router-link> |
    </div>
    <span v-if="isLoggedIn">
      <a @click="logout">Logout</a>
    </span>
    <span v-else>
      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link>
    </span>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "NavBar",
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isAuthenticated;
    },
    ...mapGetters({ User: "StateUser" }),
  },
  methods: {
    async logout() {
      await this.$store.dispatch("LogOut");
      this.$router.push("/login");
    },
  },
};
</script>
<style>
#nav {
  padding: 30px;
  display: flex;
  justify-content: center;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
a:hover {
  cursor: pointer;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>