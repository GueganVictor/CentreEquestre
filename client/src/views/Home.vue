<template>
  <div class="home">
  <p>Ay lmaoo welcome</p>
  <p>Hello {{this.$store.getters.StateUser.username}}</p>
  <p>your address is {{this.$store.getters.StateUser.email}}</p>
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