<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
<<<<<<< HEAD
    <router-link to="/admins">Admins</router-link> |
    <router-link to="/instructoradmin">InstructorAdmin</router-link> |
    <router-link to="/horses">Horses</router-link> |
    <router-link to="/lessons">Lessons</router-link> | 
    <router-link to="/about">About</router-link> |
    <router-link to="/apply_lesson">Apply lesson</router-link> |
=======
<<<<<<< HEAD
    <router-link to="/posts">Dashboard</router-link> |
=======
    <router-link to="/admins">Admins</router-link> |
    <router-link to="/horses">Horses</router-link> |
    <router-link to="/lessons">Lessons</router-link> | 
    <router-link to="/about">About</router-link> |
>>>>>>> db16045750c7e973cf86a57ba0855262d140a44d
>>>>>>> 8b46794c4032994673c75c88f2f9256e8836f3e7
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
export default {
  name: 'NavBar',
  computed : {
      isLoggedIn : function(){ return this.$store.getters.isAuthenticated}
    },
    methods: {
      async logout (){
        await this.$store.dispatch('LogOut')
        this.$router.push('/login')
      }
    },
}
</script>
<style>
#nav {
  padding: 30px;
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