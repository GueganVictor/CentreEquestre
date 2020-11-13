import axios from "axios";

const state = {
  user: null,
<<<<<<< HEAD
=======
<<<<<<< HEAD
  posts: null,
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  StatePosts: (state) => state.posts,
  StateUser: (state) => state.user,
=======
>>>>>>> 8b46794c4032994673c75c88f2f9256e8836f3e7
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
  StateToken: (state) => state.token,
<<<<<<< HEAD
};

const actions = {
  async Register({ dispatch }, form) {
=======
>>>>>>> db16045750c7e973cf86a57ba0855262d140a44d
};

const actions = {
  async Register({dispatch}, form) {
>>>>>>> 8b46794c4032994673c75c88f2f9256e8836f3e7
    await axios.post('auth/signup/', form)
    let UserForm = new FormData()
    UserForm.append('username', form.username)
    UserForm.append("email", form.email)
    UserForm.append("password", form.password)
    UserForm.append("first_name", form.first_name)
    UserForm.append("last_name", form.last_name)
    UserForm.append("phone_number", form.phone_number)
    UserForm.append("licence_number", form.licence_number)
    await dispatch('LogIn', UserForm)
  },

<<<<<<< HEAD
  async LogIn({ dispatch }, user) {
    let response = await axios.post("auth/get_token/", user);

=======
<<<<<<< HEAD
  async LogIn({commit}, user) {
    await axios.post("auth/get_token/", user);
    await commit("setUser", user);
  },

  async CreatePost({ dispatch }, post) {
    await axios.post("post", post);
    return await dispatch("GetPosts");
  },

  async GetPosts({ commit }) {
    let response = await axios.get("users");
    commit("setPosts", response.data);
=======
  async LogIn({dispatch}, user) {
    let response = await axios.post("auth/get_token/", user);
    
>>>>>>> 8b46794c4032994673c75c88f2f9256e8836f3e7
    //await commit("setToken", response.data.token)

    getters.StateToken.token = response.data.token;
    await dispatch("GetUser", response.data.token);
  },

  async CreateAdmin({ dispatch }, user) {
<<<<<<< HEAD
    await axios.post("users/", user, {
      headers: {
        'Authorization': 'JWT ' + getters.StateToken.token,
      }
    });
=======
    await axios.post("users/", user,  {
      headers: {
       'Authorization': 'JWT '+ getters.StateToken.token,
      }});
>>>>>>> 8b46794c4032994673c75c88f2f9256e8836f3e7
    return await dispatch("GetUsers");
  },

  async CreateHorse({ dispatch }, horse) {
<<<<<<< HEAD
    await axios.post("horses/", horse, {
      headers: {
        'Authorization': 'JWT ' + getters.StateToken.token,
      }
    });
=======
    await axios.post("horses/", horse,  {
      headers: {
       'Authorization': 'JWT '+ getters.StateToken.token,
      }});
>>>>>>> 8b46794c4032994673c75c88f2f9256e8836f3e7
    return await dispatch("GetHorses");
  },

  async CreateLesson({ dispatch }, lesson) {
<<<<<<< HEAD
    await axios.post("lessons/", lesson, {
      headers: {
        'Authorization': 'JWT ' + getters.StateToken.token,
      }
    });
    return await dispatch("GetLessons");
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
=======
    await axios.post("lessons/", lesson,  {
      headers: {
       'Authorization': 'JWT '+ getters.StateToken.token,
      }});
    return await dispatch("GetLessons");
  },

  async GetUsers({ commit }) {
    console.log("hell" + getters.StateToken.token);
    let response = await axios.get("users/",  {
      headers: {
       'Authorization': 'JWT '+ getters.StateToken.token,
      }});
>>>>>>> 8b46794c4032994673c75c88f2f9256e8836f3e7
    commit("setUsers", response.data);
  },

  async GetHorses({ commit }) {
<<<<<<< HEAD
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
=======
    let response = await axios.get("horses",  {
      headers: {
       'Authorization': 'JWT '+ getters.StateToken.token,
      }});
    commit("setHorses", response.data);
  },


  async GetLessons({ commit }) {
    let response = await axios.get("lessons",  {
      headers: {
       'Authorization': 'JWT '+ getters.StateToken.token,
      }});
>>>>>>> 8b46794c4032994673c75c88f2f9256e8836f3e7
    commit("setLessons", response.data);
  },

  async GetUser({ commit }, token) {
    console.log(token);
<<<<<<< HEAD
    let response = await axios.get("users/" + 1 + "/", {
      headers: {
        'Authorization': 'JWT ' + token,
      }
    });
=======
    let response = await axios.get("users/"+1+"/", {
      headers: {
       'Authorization': 'JWT '+ token,
      }});
>>>>>>> 8b46794c4032994673c75c88f2f9256e8836f3e7
    commit("setUser", response.data);
  },

  async UpdateUser({ commit }, user) {
<<<<<<< HEAD
    let response = await axios.patch("users/" + user.id + "/", user, {
      headers: {
        'Authorization': 'JWT ' + getters.StateToken.token,
      }
    });
    commit("setUser", response.data);
=======
    let response = await axios.patch("users/"+user.id+"/", user,  {
      headers: {
       'Authorization': 'JWT '+ getters.StateToken.token,
      }});
    commit("setUser", response.data);
>>>>>>> db16045750c7e973cf86a57ba0855262d140a44d
>>>>>>> 8b46794c4032994673c75c88f2f9256e8836f3e7
  },

  async LogOut({ commit }) {
    let user = null;
<<<<<<< HEAD
    let users = null;
    commit("logout", user, users);
=======
<<<<<<< HEAD
    let posts = null;
    commit("logout", user, posts);
=======
    let users = null;
    commit("logout", user, users);
>>>>>>> db16045750c7e973cf86a57ba0855262d140a44d
>>>>>>> 8b46794c4032994673c75c88f2f9256e8836f3e7
  },
};

const mutations = {
  setUser(state, user) {
    let userdic = {
<<<<<<< HEAD
      "id": user.id,
      "username": user.username,
      "email": user.email,
      "first_name": user.first_name,
      "last_name": user.last_name,
      "phone_number": user.phone_number,
      "licence_number": user.licence_number,
      "role": user.role,
=======
<<<<<<< HEAD
      "username":user.get("username"),
      "email":user.get("email"),
      "first_name":user.get("first_name"),
      "last_name":user.get("last_name"),
      "phone_number":user.get("phone_number"),
      "licence_number":user.get("licence_number"),
      "is_admin":user.get("password"),
      "is_superuser":user.get("is_superuser"),
=======
      "id":user.id,
      "username":user.username,
      "email":user.email,
      "first_name":user.first_name,
      "last_name":user.last_name,
      "phone_number":user.phone_number,
      "licence_number":user.licence_number,
      "role":user.role,
>>>>>>> db16045750c7e973cf86a57ba0855262d140a44d
>>>>>>> 8b46794c4032994673c75c88f2f9256e8836f3e7
    }
    state.user = userdic
  },

<<<<<<< HEAD
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
  logout(state, user, users) {
    state.user = user;
    state.users = users;
=======
<<<<<<< HEAD
  setPosts(state, posts){
    state.posts = posts
},
  logout(state, user, posts) {
    state.user = user;
    state.posts = posts;
=======
  setUsers(state, users){
    state.users = users
},
setToken(state, token){
  console.log("hello"+token);
  state.token = token
},
setHorses(state, horses){
  state.horses = horses
},
setLessons(state, lessons){
  state.lessons = lessons
},
  logout(state, user, users) {
    state.user = user;
    state.users = users;
>>>>>>> db16045750c7e973cf86a57ba0855262d140a44d
>>>>>>> 8b46794c4032994673c75c88f2f9256e8836f3e7
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};