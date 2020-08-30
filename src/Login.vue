<template>
    <div id="firebaseui-auth-container">
    <button @click="logout()" >ログアウト</button>
    </div>

</template>

<script>
import firebase from "firebase";
import {db} from 'main.js';



export default {

    data(){
      return{
        currentUser:{},
        // user: db.collection('users').doc(this.currentUser.uid)
      }
    },

  created() {
    //----------------------------------------------
    // Firebase UIの設定
    //----------------------------------------------
    var uiConfig = {
        // ログイン完了時のリダイレクト先
        signInSuccessUrl: 'http://localhost:8080',
        signInFlow: 'popup',


        // 利用する認証機能
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
        //   {provider:firebase.auth.PhoneAuthProvider.PROVIDER_ID, defaultCountry:'JP'},
          firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
        ],

        // 利用規約のURL(任意で設定)
        // tosUrl: 'http://example.com/kiyaku/',
        // プライバシーポリシーのURL(任意で設定)
        // privacyPolicyUrl: 'https://miku3.net/privacy.html'
    };

    //----------------------------------------------
    // ログイン状態のチェック
    //----------------------------------------------
    firebase.auth().onAuthStateChanged( (user) => {
      // ログイン済み
      if(user) {
        console.log(user);
        this.currentUser = user
        // this.createUser(user)
        
      }
      // 未ログイン
      else {
        var ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth())
        ui.start('#firebaseui-auth-container', uiConfig);
        
      }
    });

    //----------------------------------------------
    // ログアウト (下記methods内に記載) 
    //----------------------------------------------

    
  },


    methods: {
        logout() {
        // ログアウト処理
        firebase.auth().signOut();
        },

        createUser (user) {
        db.collection('users').doc(user.uid).set({
        'name': user.displayName,
        'email':user.email
        }, { merge: true })
}
    },

    components:{
        db
    },


    props: ["config"]
}
</script>