<template>
  <div class="users">
    <div v-if="User">
      <p>Hi {{ User.username }}</p>
    </div>
    <div>
      <form @submit.prevent="submit">
        <div>
          <label for="first_name">First Name:</label>
          <input type="text" name="first_name" v-model="form.first_name" />
        </div>
        <div>
          <label for="last_name">Last Name:</label>
          <input type="text" name="last_name" v-model="form.last_name" />
        </div>
        <div>
          <label for="email">Email :</label>
          <input type="email" name="email" v-model="form.email" />
        </div>
        <div>
          <label for="phone_number">Phone Number:</label>
          <input type="text" name="phone_number" v-model="form.phone_number" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>




<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Users",
  components: {},
  data() {
    return {
      form: {
        id: this.$store.getters.StateUser.id,
        email: this.$store.getters.StateUser.email,
        password: null,
        first_name: this.$store.getters.StateUser.first_name,
        last_name: this.$store.getters.StateUser.last_name,
        phone_number: this.$store.getters.StateUser.phone_number,
        role: this.$store.getters.StateUser.role,
      },
      // options: [
      //   { text: 'superuser', value: 'superuser' },
      //   { text: 'admin', value: 'admin' },
      //   { text: 'instructor', value: 'instructor' },
      //   { text: 'rider', value: 'rider' }
      // ]
    };
  },
  created: function () {
    // a function to call getusers action
    this.GetUsers();
  },
  computed: {
    ...mapGetters({ Users: "StateUsers", User: "StateUser" }),
  },
  methods: {
    ...mapActions(["UpdateUser", "GetUsers"]),
    async submit() {
      const User = new FormData();
      User.append("email", this.form.email);
      User.append("first_name", this.form.first_name);
      User.append("id", this.form.id);
      User.append("last_name", this.form.last_name);
      User.append("phone_number", this.form.phone_number);
      try {
        await this.UpdateUser(User);
      } catch (error) {
        console.log(error);
        throw "Sorry you can't make a user now!";
      }
    },
  },
};
</script>

<style scoped>
form {
  width: 600px;
  margin: 0 auto;
}
* {
  box-sizing: border-box;
}
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
button[type="submit"] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 30px;
  margin: 10px;
}
button[type="submit"]:hover {
  background-color: #45a049;
}
input,
select {
  width: auto;
  min-width: 200px;
  margin: 15px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 10px;
  border-radius: 30px;
}
textarea {
  width: 75%;
  resize: vertical;
  padding: 15px;
  border-radius: 15px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  height: 150px;
  margin: 15px;
}
ul {
  list-style: none;
}
#user-div {
  border: 3px solid #000;
  width: 500px;
  margin: auto;
  margin-bottom: 5px;
}
</style>
