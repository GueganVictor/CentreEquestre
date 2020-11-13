<template>
  <div class="home">
  <h1>Welcome to Equideo</h1>
  <br/>
  <p>Hello {{this.$store.getters.StateUser.username}}</p>
  <p>your role is {{this.$store.getters.StateUser.role}}</p>
  </div>
</template>
<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>