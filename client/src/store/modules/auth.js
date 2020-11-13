import axios from "axios";

const state = {
  user: null,
<<<<<<< HEAD
  posts: null,
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  StatePosts: (state) => state.posts,
  StateUser: (state) => state.user,
=======
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
>>>>>>> db16045750c7e973cf86a57ba0855262d140a44d
};

const actions = {
  async Register({dispatch}, form) {
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
    
    //await commit("setToken", response.data.token)

    getters.StateToken.token = response.data.token;
    await dispatch("GetUser", response.data.token);
  },

  async CreateAdmin({ dispatch }, user) {
    await axios.post("users/", user,  {
      headers: {
       'Authorization': 'JWT '+ getters.StateToken.token,
      }});
    return await dispatch("GetUsers");
  },

  async CreateHorse({ dispatch }, horse) {
    await axios.post("horses/", horse,  {
      headers: {
       'Authorization': 'JWT '+ getters.StateToken.token,
      }});
    return await dispatch("GetHorses");
  },

  async CreateLesson({ dispatch }, lesson) {
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
    commit("setUsers", response.data);
  },

  async GetHorses({ commit }) {
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
    commit("setLessons", response.data);
  },

  async GetUser({ commit }, token) {
    console.log(token);
    let response = await axios.get("users/"+1+"/", {
      headers: {
       'Authorization': 'JWT '+ token,
      }});
    commit("setUser", response.data);
  },

  async UpdateUser({ commit }, user) {
    let response = await axios.patch("users/"+user.id+"/", user,  {
      headers: {
       'Authorization': 'JWT '+ getters.StateToken.token,
      }});
    commit("setUser", response.data);
>>>>>>> db16045750c7e973cf86a57ba0855262d140a44d
  },

  async LogOut({ commit }) {
    let user = null;
<<<<<<< HEAD
    let posts = null;
    commit("logout", user, posts);
=======
    let users = null;
    commit("logout", user, users);
>>>>>>> db16045750c7e973cf86a57ba0855262d140a44d
  },
};

const mutations = {
  setUser(state, user) {
    let userdic = {
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
    }
    state.user = userdic
  },

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
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};