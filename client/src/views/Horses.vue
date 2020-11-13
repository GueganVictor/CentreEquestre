<template>
  <div class="users">
    <div v-if="User">
      <p>Hi {{ User.username }}</p>
    </div>
    <div>
      <form @submit.prevent="submit">
        <div>
          <label for="name">Name :</label>
          <input type="name" name="name" v-model="form.name" />
        </div>
        <div>
          <label for="hair">Hair:</label>
          <input type="text" name="hair" v-model="form.hair" />
        </div>
        <div>
          <label for="birth_date">Password:</label>
          <input type="date" name="birth_date" v-model="form.birth_date" />
        </div>
        <div>
<<<<<<< HEAD
          <label for="height">weight</label>
=======
>>>>>>> 8b46794c4032994673c75c88f2f9256e8836f3e7
          <input
            type="number"
            id="weight"
            name="weight"
            v-model="form.weight"
          />
<<<<<<< HEAD
        </div>
        <div>
          <label for="height">height</label>
=======
          <label for="height">height</label>
        </div>
        <div>
>>>>>>> 8b46794c4032994673c75c88f2f9256e8836f3e7
          <input
            type="number"
            id="height"
            name="height"
            v-model="form.height"
          />
<<<<<<< HEAD
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
    <!-- <div class="users" v-if="Horses">
      <ul>
        <li v-for="user in Horses" :key="user.name">
          <div id="user-div">
            <p>{{ user.id }}</p>
=======
          <label for="height">height</label>
        </div>
                <div>
          <label for="is_healthy">Is healthy ?</label>
          <input type="checkbox" checked name="is_healthy" v-model="form.is_healthy" />
        </div>
        <div>
          <label for="is_here">Is Here ?</label>
          <input type="checkbox" checked name="is_here" v-model="form.is_here" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    <div class="users" v-if="Horses">
      <ul>
        <li v-for="user in Horses" :key="user.name">
          <div id="user-div">
>>>>>>> 8b46794c4032994673c75c88f2f9256e8836f3e7
            <p>{{ user.name }}</p>
            <p>{{ user.height }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>Oh no!!! We have no horses</div>
<<<<<<< HEAD
  </div> -->
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="Horses"
        :search="search"
      ></v-data-table>
    </v-card>
=======
>>>>>>> 8b46794c4032994673c75c88f2f9256e8836f3e7
  </div>
</template>




<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Users",
  components: {},
  data() {
    return {
<<<<<<< HEAD
      search: "",
      headers: [
        { text: "id", value: "id", align: "start", filterable: false },
        { text: "name", value: "name" },
        { text: "hair", value: "hair" },
        { text: "birth_date", value: "birth_date" },
        { text: "Height (cm)", value: "height" },
        { text: "Weight (kg)", value: "weight" },
      ],
      form: {
        name: "",
        birth_date: "",
=======
      form: {
        name: "",
        birth_date: "",
        is_healthy: "",
        is_here: "",
>>>>>>> 8b46794c4032994673c75c88f2f9256e8836f3e7
        hair: "",
        weight: "",
        height: "",
      },
    };
  },
  created: function () {
    // a function to call getusers action
    this.GetHorses();
  },
  computed: {
    ...mapGetters({ Horses: "StateHorses", User: "StateUser" }),
  },
  methods: {
    ...mapActions(["CreateHorse", "GetHorses"]),
    async submit() {
      const Horse = new FormData();
      Horse.append("name", this.form.name);
      Horse.append("birth_date", this.form.birth_date);
<<<<<<< HEAD
      Horse.append("is_healthy", true);
      Horse.append("is_here", true);
=======
      Horse.append("is_healthy", this.form.is_healthy);
      Horse.append("is_here", this.form.is_here);
>>>>>>> 8b46794c4032994673c75c88f2f9256e8836f3e7
      Horse.append("hair", this.form.hair);
      Horse.append("weight", this.form.weight);
      Horse.append("height", this.form.height);
      try {
        await this.CreateHorse(Horse);
      } catch (error) {
        throw "Sorry you can't make a user now!";
      }
    },
  },
};
</script>

<style scoped>
<<<<<<< HEAD


=======
>>>>>>> 8b46794c4032994673c75c88f2f9256e8836f3e7
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
