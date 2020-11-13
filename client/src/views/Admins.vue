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
        <div>
          <label for="password">Password:</label>
          <input type="password" name="password" v-model="form.password" />
        </div>
                <div>
          <label for="role">role</label>
          <select name="role" id="role">
            <option value="admin">admin</option>
            <option value="instructor">instructor</option>
            <option value="superuser">superuser</option>
            <option value="rider">rider</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    <div class="users" v-if="Users">
      <ul>
        <li v-for="user in Users" :key="user.email">
          <div id="user-div">
            <p>{{ user.first_name }}</p>
            <p>{{ user.email }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>Oh no!!! We have no users</div>
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
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        phone_number: "",
        role: "",
      },
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
    ...mapActions(["CreateAdmin", "GetUsers"]),
    async submit() {
      const Admin = new FormData();
      Admin.append("email", this.form.email);
      Admin.append("password", this.form.password);
      Admin.append("first_name", this.form.first_name);
      Admin.append("last_name", this.form.last_name);
      Admin.append("phone_number", this.form.phone_number);
      Admin.append("role", this.form.role);
      try {
        await this.CreateAdmin(Admin);
      } catch (error) {
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
input {
  width: auto;
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
