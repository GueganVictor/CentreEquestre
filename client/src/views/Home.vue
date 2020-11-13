<template>
  <div class="home">
  <p>Ay lmaoo welcome</p>
  <p>Hello {{this.$store.getters.StateUser.username}}</p>
<<<<<<< HEAD
=======
  <p>your address is {{this.$store.getters.StateUser.email}}</p>
>>>>>>> db16045750c7e973cf86a57ba0855262d140a44d
  </div>
</template>
<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>