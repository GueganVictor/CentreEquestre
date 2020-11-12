import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import auth from './modules/auth';
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth
  },
  plugins: [createPersistedState()]
});