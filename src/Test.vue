<template>
    <v-ons-page>
        <Tettt></Tettt>
        <Tettt></Tettt>
        <Tettt></Tettt>
        <Tettt></Tettt>
        <Tettt></Tettt>
        <Login></Login>
        <Tettt></Tettt>
        <Tettt></Tettt>
        <Tettt></Tettt>
        <Tettt></Tettt>
     <h1>Firebase Auth Sample</h1>
      <div id="info"></div>
      <!-- <div id="firebaseui-auth-container"></div> -->
      <!-- <div id="logout" class="hide"> -->
      <!-- <button @click="logout()" >ログアウト</button> -->
      <p>${user.displayName}}</p>

      




    </v-ons-page>
    
</template>

<script>
import Login from 'Login' 
import Tettt from 'Tettt'


import firebase from "firebase";
import {db} from 'main.js';
import 'firebase/auth';  

export default{
  components:{
    Tettt,
    Login
  }
}

//   import page1 from './Page1';
//   import page2 from './Page2';
//   import Account from 'Account';

//   import {db} from 'main.js';


//   import firebase from "firebase";
// // import firebaseui from "firebaseui__ja";
// // import "firebaseui/firebaseui.css";

// export default {
//   data() {
//       return {
//         pageStack: [page1],
//         user : []
//       }
//   },

//   created() {
//     //----------------------------------------------
//     // Firebase UIの設定
//     //----------------------------------------------
//     var uiConfig = {
//         // ログイン完了時のリダイレクト先
//         signInSuccessUrl: 'https://google.com',
//         signInFlow: 'popup',


//         // 利用する認証機能
//         signInOptions: [
//           firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//         //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//           firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//           firebase.auth.EmailAuthProvider.PROVIDER_ID,
//         //   {provider:firebase.auth.PhoneAuthProvider.PROVIDER_ID, defaultCountry:'JP'},
//           firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
//         ],

//         // 利用規約のURL(任意で設定)
//         // tosUrl: 'http://example.com/kiyaku/',
//         // プライバシーポリシーのURL(任意で設定)
//         // privacyPolicyUrl: 'https://miku3.net/privacy.html'
//     };

//     //----------------------------------------------
//     // ログイン状態のチェック
//     //----------------------------------------------
//     firebase.auth().onAuthStateChanged( (user) => {
//       // ログイン済み
//       if(user) {
//         this.currentUser = user
//         showLogin('Login Complete!', `${user.displayName}さんがログインしました<br>(${user.uid})`);
//         console.log(user);
//       }
//       // 未ログイン
//       else {
//         var ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth())
//         ui.start('#firebaseui-auth-container', uiConfig);
//       }
//     });

//     //----------------------------------------------
//     // ログアウト
//     //----------------------------------------------
//     document.querySelector('#logout')
//     .addEventListener("DOMContentLoaded", function(){
//     document.getElementById('btn').addEventListener('click', ()=>{
//       firebase.auth().signOut().then(()=>{
//           showLogout("Firebase Auth Sample", "");
//         })
//         .catch( (error)=>{
//           alert(`ログアウトできませんでした(${error})`);
//         });
//       })
//     })
//      /**
//      * ログイン時の各種表示
//      */
//     function showLogin(title, msg){
//       document.querySelector('h1').innerHTML    = title;
//       document.querySelector('#info').innerHTML = msg;
//       document.querySelector('#logout').classList.remove("hide");
//     }

//     /**
//      * ログアウト時の各種表示
//      */
//      function showLogout(title, msg){
//       document.querySelector('h1').innerHTML    = title;
//       document.querySelector('#info').innerHTML = msg;
//       document.querySelector('#logout').classList.add("hide");
//     }
//   },

//   methods:{
//     logout:
//       function () {
//       // ログアウト処理
//       firebase.auth().signOut();
//       }
//   },

//   props: ["config"]
// }
</script>
