<template>
  <div id="app">
      <v-ons-page>
          <v-ons-toolbar>
          <div class="center">{{ title }}</div>
          </v-ons-toolbar>
          <v-ons-tabbar position="auto"
          :tabs="tabs"
          :visible="true"
          :index.sync="activeIndex"
          >
          </v-ons-tabbar>
      </v-ons-page>    
  </div>
</template>

<script>
// import settingsPage from 'Settings';
import homePage from 'Home';
import newsPage from 'News';
import chat from 'Chat';
import test from 'Test';
import Account from 'Account';
import MypageNavi from 'MypageNavi';

import Tabbar from  '@/components/Tabbar';


import {db} from 'main.js';


// firebase モジュール
import firebase from 'firebase'
// 改行を <br> タグに変換するモジュール
import Nl2br from 'vue-nl2br'
export default {
  
  components: { 
    Nl2br,
    chat,
    homePage,
    newsPage,
    test,
    MypageNavi,

    Tabbar

    

  },

  data() {
    return {
      username:'takuya',
      currentUser:{},
      
      activeIndex: 0,
      tabs: [
            {
              icon: this.md() ? null : 'ion-home',
              label: 'Home',
              page: homePage,
              props: {
                currentUser: 'this.currentUser'
              },
            },
            {
            icon: this.md() ? null : 'ion-chat',
              label: 'Chat',
              page: chat
            },
            {
              icon: this.md() ? null : 'ion-ios-bell',
              label: 'News',
              page: newsPage,
              badge: 3
            },
            {
              icon: this.md() ? null : 'ion-ios-MypageNavi',
              label: 'Mypage',
              page: MypageNavi
            },
            {
              icon: this.md() ? null : 'ion-ios-test',
              label: 'Test',
              page: test
            }
          ]
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
        this.currentUser = user
        console.log(currentUser);
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
        },

         md() {
          return this.$ons.platform.isAndroid();
    }
    },

    components:{
        db
    },


    props: ["config"],
  
  
  computed: {
    title() {
      return this.tabs[this.activeIndex].label;
    }
  }
}

</script>


