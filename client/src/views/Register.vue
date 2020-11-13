<template>
  <div class="register">
      <div>
          <form @submit.prevent="submit">
            <div>
              <label for="username">Username:</label>
              <input type="text" name="username" v-model="form.username">
            </div>
            <div>
              <label for="first_name">First Name:</label>
              <input type="text" name="first_name" v-model="form.first_name">
            </div>
            <div>
              <label for="email">Email :</label>
              <input type="email" name="email" v-model="form.email">
            </div>
            <div>
              <label for="last_name">Last Name:</label>
              <input type="text" name="last_name" v-model="form.last_name">
            </div>
            <div>
              <label for="phone_number">Phone Number:</label>
              <input type="text" name="phone_number" v-model="form.phone_number">
            </div>
            <div>
              <label for="licence_number">Licence Number:</label>
              <input type="text" name="licence_number" v-model="form.licence_number">
            </div>
            <div>
              <label for="password">Password:</label>
              <input type="password" name="password" v-model="form.password">
            </div>
            <div>
              <label for="password2">Password Verification:</label>
              <input type="password" name="password2" v-model="password2">
            </div>
            <button type="submit"> Submit</button>
          </form>
      </div>
      <p v-if="showError" id="error">Something went wrong..</p>
      <p v-if="!matchingPassword" id="error">Password aren't matching..</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
  components: {},
  data() {
    return {
      form: {
        "username": "",
        "email": "",
        "password": "",
        "first_name": "",
        "last_name": "",
        "phone_number": "",
        "licence_number": "",
        "role": 'rider'
      },
      "password2": "",
      showError: false,
      matchingPassword: true
    };
  },
  methods: {
    ...mapActions(["Register"]),
    async submit() {
      if (this.form.password != this.password2) {
        this.matchingPassword = false;
        return;
      }
      try {
        await this.Register(this.form);
        this.$router.push("/");
        this.showError = false
      } catch (error) {
        this.showError = true
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
button[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius:30px;
}
button[type=submit]:hover {
  background-color: #45a049;
}
input {
  margin: 5px;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
  padding:10px;
  border-radius:30px;
}
#error {
  color: red;
}
</style>