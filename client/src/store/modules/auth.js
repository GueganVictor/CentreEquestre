import axios from "axios";

const state = {
  user: null,
  users: null,
  horses: null,
  lessons: null,
  token: null,
};


const getters = {
  isAuthenticated: (state) => !!state.user,
  StateUsers: (state) => state.users,
  StateUser: (state) => state.user,
  StateHorses: (state) => state.horses,
  StateLessons: (state) => state.lessons,
  StateHorseRiders: (state) => state.horseriders,
  StateToken: (state) => state.token,
};

const actions = {
  async Register({ dispatch }, form) {
    await axios.post('auth/signup/', form)
    let UserForm = new FormData()
    UserForm.append('username', form.email)
    UserForm.append("password", form.password)
    await dispatch('LogIn', UserForm)
  },

  async LogIn({ dispatch }, user) {
    let response = await axios.post("auth/get_token/", user);
    getters.StateToken.token = response.data.token;
    await dispatch("GetUser", user.get("username"));
  },

  async CreateAdmin({ dispatch }, user) {
    await axios.post("users/", user, {
      headers: {
        'Authorization': 'JWT ' + getters.StateToken.token,
      }
    });
    return await dispatch("GetUsers");
  },

  async CreateHorse({ dispatch }, horse) {
    await axios.post("horses/", horse, {
      headers: {
        'Authorization': 'JWT ' + getters.StateToken.token,
      }
    });
    return await dispatch("GetHorses");
  },

  async CreateLesson({ dispatch }, lesson) {
    await axios.post("lessons/", lesson, {
      headers: {
        'Authorization': 'JWT ' + getters.StateToken.token,
      }
    });
    return await dispatch("GetLessons");
  },

  async CreateHorseRider({ dispatch }, lesson) {
    await axios.post("horseriders/", lesson, {
      headers: {
        'Authorization': 'JWT ' + getters.StateToken.token,
      }
    });
    return await dispatch("GetHorseRiders");
  },

  async DeleteUser({ dispatch }, id) {
    await axios.delete("users/"+id+"/", {
      headers: {
        'Authorization': 'JWT ' + getters.StateToken.token,
      }
    });
    await dispatch("GetUsers");
  },

  async DeleteHorse({ dispatch }, id) {
    await axios.delete("horses/"+id+"/", {
      headers: {
        'Authorization': 'JWT ' + getters.StateToken.token,
      }
    });
    await dispatch("GetHorses");
  },

  async DeleteLesson({ dispatch }, id) {
    await axios.delete("lessons/"+id+"/", {
      headers: {
        'Authorization': 'JWT ' + getters.StateToken.token,
      }
    });
    await dispatch("GetLessons");
  },

  async GetUsers({ commit }) {
    console.log("hell" + getters.StateToken.token);
    let response = await axios.get("users/", {
      headers: {
        'Authorization': 'JWT ' + getters.StateToken.token,
      }
    });
    commit("setUsers", response.data);
  },

  async GetHorses({ commit }) {
    let response = await axios.get("horses", {
      headers: {
        'Authorization': 'JWT ' + getters.StateToken.token,
      }
    });
    commit("setHorses", response.data);
  },

  async GetLessons({ commit }) {
    let response = await axios.get("lessons", {
      headers: {
        'Authorization': 'JWT ' + getters.StateToken.token,
      }
    });
    commit("setLessons", response.data);
  },

  async GetHorseRiders({ commit }) {
    let response = await axios.get("horseriders/", {
      headers: {
        'Authorization': 'JWT ' + getters.StateToken.token,
      }
    });
    commit("setHorseRiders", response.data);
  },

  async GetUser({ commit }, username) {
    let response = await axios.get("get_user/" + username + "/", {
      headers: {
        'Authorization': 'JWT ' + getters.StateToken.token,
      }
    });
    commit("setUser", response.data);
  },

  async UpdateUser({ dispatch }, user) {
    await axios.patch("users/" + user.get("id") + "/", user, {
      headers: {
        'Authorization': 'JWT ' + getters.StateToken.token,
      }
    });
    await dispatch("GetUsers");
  },

  async LogOut({ commit }) {
    let user = null;
    let users = null;
    commit("logout", user, users);
  },
};

const mutations = {
  setUser(state, user) {
    let userdic = {
      "id": user.id,
      "username": user.username,
      "email": user.email,
      "first_name": user.first_name,
      "last_name": user.last_name,
      "phone_number": user.phone_number,
      "licence_number": user.licence_number,
      "role": user.role,
    }
    state.user = userdic
  },

  setUsers(state, users) {
    state.users = users
  },
  setToken(state, token) {
    console.log("hello" + token);
    state.token = token
  },
  setHorses(state, horses) {
    state.horses = horses
  },
  setLessons(state, lessons) {
    state.lessons = lessons
  },
  setHorseRiders(state, horseriders) {
    state.horseriders = horseriders
  },
  logout(state, user, users) {
    state.user = user;
    state.users = users;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};