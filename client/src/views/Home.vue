<template>
  <div class="home">
  <p>Ay lmaoo welcome</p>
  <p>Hello {{this.$store.getters.StateUser.username}}</p>
  </div>
</template>
<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>