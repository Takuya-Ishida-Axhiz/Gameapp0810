
import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
// import firebase from 'firebase'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

import { firestorePlugin } from 'vuefire' 

import firebaseui from 'firebaseui-ja'
import 'firebaseui-ja/dist/firebaseui.css'
import router from './router.js';

Vue.use(firestorePlugin)



Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDQIzccqwhpPtgd4AswJINVHnc4ETBpv98",
  authDomain: "gameapp-alive.firebaseapp.com",
  databaseURL: "https://gameapp-alive.firebaseio.com",
  projectId: "gameapp-alive",
  storageBucket: "gameapp-alive.appspot.com",
  messagingSenderId: "184451273275",
  appId: "1:184451273275:web:6cfb9405a329879fdac21e",
  measurementId: "G-Q8WHJF1QRV"
}
firebase.initializeApp(config)
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export{
  db,
  auth,
  storage
}




import ons from 'onsenui';
// Onsen UI Styling and Icons
require('onsenui/css-components-src/src/onsen-css-components.css');
require('onsenui/css/onsenui.css');

import App from './App';

if (ons.platform.isIPhoneX()) {
  document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
  document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
}

Vue.use(VueOnsen);

new Vue({
  el: '#app',
  template: '<app></app>',
  router,
  components:{App}
});
