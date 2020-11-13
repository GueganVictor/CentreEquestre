<template>
  <div class="users">
    <div v-if="User">
      <p>Hi {{ User.username }}</p>
    </div>
    <div class="users" v-if="HorseRiders">
      <ul>
        <li v-for="horserider in HorseRiders.filter(horserider => horserider.rider.substr(horserider.rider.length - 2) == User.id+'/')" :key="horserider.id">
          <div id="user-div">
            
            <p>{{ horserider.id }}</p>
            <p>{{ horserider.rider }}</p>
            <p>{{ horserider.lesson }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>Oh no!!! We have no HorseRiders</div>
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
        name: "",
        birth_date: "",
      },
    };
  },
  created: function () {
    // a function to call getusers action
    this.GetHorseRiders();
  },
  computed: {
    ...mapGetters({ HorseRiders: "StateHorseRiders", User: "StateUser" }),
  },
  methods: {
    ...mapActions(["CreateHorseRider", "GetHorseRiders"]),
    async submit() {
      const Horse = new FormData();
      Horse.append("name", this.form.name);
      Horse.append("birth_date", this.form.birth_date);
      try {
        await this.CreateHorseRiders(Horse);
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
