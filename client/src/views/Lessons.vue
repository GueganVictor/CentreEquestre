<template>
  <div class="users">
    <div v-if="User">
      <p>Hi {{ User.username }}</p>
    </div>
    <div>
      <form @submit.prevent="submit">
        <div>
          <label for="title">Title:</label>
          <input type="text" name="title" v-model="form.title" />
        </div>
        <div>
          <label for="start_time">start time:</label>
          <input type="datetime-local" name="start_time" v-model="form.start_time" />
        </div>
        <div>
          <label for="end_time">End time:</label>
          <input type="datetime-local" name="end_time" v-model="form.end_time" />
        </div>
        <div>
          <label for="max_rider">Max rider:</label>
          <input type="number" name="max_rider" v-model="form.max_rider" />
        </div>
        <div>
          <label for="gallop_level">gallop_level:</label>
          <input type="number" name="gallop_level" v-model="form.gallop_level" />
        </div>
        <div>
          <label for="reccurency">reccurency</label>
          <input
            type="text"
            id="reccurency"
            name="reccurency"
            v-model="form.reccurency"
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="available_during_holidays"
            name="available_during_holidays"
            v-model="form.available_during_holidays"
          />
          <label for="available_during_holidays">available_during_holidays</label>
        </div>
        <button type="submit">Submit</button>
      </form>
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
  name: "Lessons",
  components: {},
  data() {
    return {
      form: {
        title: "",
        start_time: "",
        end_time: "",
        max_rider: "",
        gallop_level: "",
        reccurency: "",
        available_during_holidays: "",
      },
    };
  },
  created: function () {
    // a function to call getusers action
    this.GetLessons();
  },
  computed: {
    ...mapGetters({ Lessons: "StateLessons", User: "StateUser" }),
  },
  methods: {
    ...mapActions(["CreateLesson", "GetLessons"]),
    async submit() {
      const Lesson = new FormData();
      Lesson.append("title", this.form.title);
      Lesson.append("start_time", this.form.start_time);
      Lesson.append("end_time", this.form.end_time);
      Lesson.append("max_rider", this.form.max_rider);
      Lesson.append("gallop_level", this.form.gallop_level);
      Lesson.append("reccurency", this.form.reccurency);
      Lesson.append("available_during_holidays", this.form.available_during_holidays);
      try {
        await this.CreateLesson(Lesson);
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
