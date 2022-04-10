import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDIgexMZQmfqh2YGcEd_1dvqwpvY2xiYwM",
  authDomain: "vue-pwa-firebase-demo.firebaseapp.com",
  projectId: "vue-pwa-firebase-demo",
  storageBucket: "vue-pwa-firebase-demo.appspot.com",
  messagingSenderId: "496738355926",
  appId: "1:496738355926:web:60c3ee485fc314be055777",
  measurementId: "G-CY3WG4YGKP"
};

firebase.initializeApp(firebaseConfig)
Vue.prototype.$firebase = firebase
console.log("Firebase initializing ... done");

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
