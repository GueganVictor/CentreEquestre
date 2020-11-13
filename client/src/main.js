import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './store';
import axios from 'axios';

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8000/';


axios.interceptors.response.use(undefined, function (error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
  
        originalRequest._retry = true;
        store.dispatch('LogOut')
        return router.push('/login')
    }
  }
})

Vue.config.productionTip = false
new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')




// const store = new Vuex.Store({
//   state: {
//     jwt: localStorage.getItem('t'),
//     endpoints: {
//       obtainJWT: 'http://0.0.0.0:10000/auth/obtain_token',
//       refreshJWT: 'http://0.0.0.0:10000/auth/refresh_token'
//     }
//   },
//   mutations: {
//     updateToken(state, newToken){
//       localStorage.setItem('t', newToken);
//       state.jwt = newToken;
//     },
//     removeToken(state){
//       localStorage.removeItem('t');
//       state.jwt = null;
//     }
//   },
//   actions:{
//     obtainToken(username, password){
//       const payload = {
//         username: username,
//         password: password
//       }
//       axios.post(this.state.endpoints.obtainJWT, payload)
//         .then((response)=>{
//             this.commit('updateToken', response.data.token);
//           })
//         .catch((error)=>{
//             console.log(error);
//           })
//     },
//     refreshToken(){
//       const payload = {
//         token: this.state.jwt
//       }
//       axios.post(this.state.endpoints.refreshJWT, payload)
//         .then((response)=>{
//             this.commit('updateToken', response.data.token)
//           })
//         .catch((error)=>{
//             console.log(error)
//           })
//     },
//     inspectToken(){
//       const token = this.state.jwt;
//       if(token){
//         const decoded = jwt_decode(token);
//         const exp = decoded.exp
//         const orig_iat = decode.orig_iat
//         if(exp - (Date.now()/1000) < 1800 && (Date.now()/1000) - orig_iat < 628200){
//           this.dispatch('refreshToken')
//         } else if (exp -(Date.now()/1000) < 1800){
//           // DO NOTHING, DO NOT REFRESH          
//         } else {
//           // PROMPT USER TO RE-LOGIN, THIS ELSE CLAUSE COVERS THE CONDITION WHERE A TOKEN IS EXPIRED AS WELL
//         }
//       }
//     }
//   }
// })