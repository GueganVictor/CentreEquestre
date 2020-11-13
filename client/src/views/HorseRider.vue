<template>
  <div class="users">
    <div v-if="User">
      <p>Hi {{ User.username }}</p>
    </div>
    <div class="users" v-if="Lessons">
      <ul>
        <li v-for="lesson in Lessons" :key="lesson.title">
          <div id="user-div">
            <p>{{ lesson.title }}</p>
            <p>{{ lesson.end_time }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>Oh no!!! We have no lessons</div>
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
        is_healthy: "",
        is_here: "",
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
      Horse.append("is_healthy", this.form.is_healthy);
      Horse.append("is_here", this.form.is_here);
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
