import axios from "axios";

const state = {
  user: null,
  posts: null,
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  StatePosts: (state) => state.posts,
  StateUser: (state) => state.user,
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
  },

  async LogOut({ commit }) {
    let user = null;
    let posts = null;
    commit("logout", user, posts);
  },
};

const mutations = {
  setUser(state, user) {
    let userdic = {
      "username":user.get("username"),
      "email":user.get("email"),
      "first_name":user.get("first_name"),
      "last_name":user.get("last_name"),
      "phone_number":user.get("phone_number"),
      "licence_number":user.get("licence_number"),
      "is_admin":user.get("password"),
      "is_superuser":user.get("is_superuser"),
    }
    state.user = userdic
  },

  setPosts(state, posts){
    state.posts = posts
},
  logout(state, user, posts) {
    state.user = user;
    state.posts = posts;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};