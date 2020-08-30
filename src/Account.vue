<template>
  <v-ons-page>
    <div id="app">
        <div class="main">
        <!-- スマホ用ヘッダー部 -->
        <div class="dummyheader"></div>
        <v-ons-back-button>マイページ</v-ons-back-button>
        <ons-toolbar class="mypageheader pageBack-icon green">
            <!-- <div class="left">
            <ons-icon icon="far-times-circle"></ons-icon>
            </div> -->
            <div class="center">アカウント</div>
        </ons-toolbar>
        <!-- スマホ用ヘッダー部  end-->
        <div class="mypage-maincontents">
            <div class="gray-back">
            <ul class="list">
                <li class="list-item list-item--chevron">
                <div class="list-item__center">メールアドレス</div>
                <div class="list-item__right list-item--chevron__right">
                    <div class="list-item__label">{{ email }}</div>
                </div>
                </li>
                <li class="list-item list-item--chevron">
                <div class="list-item__center">電話番号</div>
                <div class="list-item__right list-item--chevron__right">
                    <div class="list-item__label">{{ tel }}</div>
                </div>
                </li>
            </ul>

            <ul class="list">
                <li class="list-item list-item--chevron">
                <div class="list-item__center">パスワード</div>
                </li>
            </ul>
            <ons-list>
                <ons-list-item>
                <div class="center">
                    フォロー・フォロワーを公開する
                </div>
                <div class="right">
                    <ons-switch></ons-switch>
                </div>
                </ons-list-item>
                <ons-list-item>
                <div class="center">
                    フレンドを公開する
                </div>
                <div class="right">
                    <ons-switch></ons-switch>
                </div>
                </ons-list-item>
            </ons-list>
            <p>アカウント連携</p>
            <ul class="sns-cooperation-list">
                <li class="cooperation-list-item">
                <img src="./img/icon_line.png" alt="" />
                LINE
                <button>
                    連携する
                </button>
                </li>
                <li class="cooperation-list-item">
                <img src="./img/icon_twitter.png" alt="" />
                Twitter
                <button class="clicked">
                    連携中
                </button>
                </li>
                <li class="cooperation-list-item">
                <img src="./img/icon_google.png" alt="" />
                Google
                <button>
                    連携する
                </button>
                </li>
                <li class="cooperation-list-item">
                <img src="./img/icon_facebook.png" alt="" />
                Facebook
                <button>
                    連携する
                </button>
                </li>
            </ul>
            <ul class="list">
                <li class="list-item list-item--chevron">
                <div class="list-item__center">ログアウト</div>
                </li>
            </ul>
            <ul class="list">
                <li class="list-item list-item--chevron">
                <div class="list-item__center">アカウント削除</div>
                </li>
            </ul>
            </div>
        </div>
        </div>
    </div>
    <!-- /main -->
  </v-ons-page>
</template>

<script>
  import app from './App';
  import firebase from 'firebase';
  import {db} from 'main.js'; 

  export default {

    data(){
        return{
            name:'',
            email:'',
            profile:'',
            photoURL:'',
            tel:'',

            uid:[]
        }
    },

  created() {
    firebase.auth().onAuthStateChanged( (user) => {
        this.uid = user.uid
        this.GetUserData()
  })
      
  },


    methods: {
        GetUserData(){
          let s = this
          db.collection("users").doc(this.uid).get()
          .then(function(doc) {
          console.log(doc.data())　//取れてる

          s.name = doc.data().name　
          s.email = doc.data().email
          s.profile = doc.data().profile
          s.photoURL= doc.data().photoURL
          s.tel= doc.data().tel
          console.log(s.tel)
      })},
      pop() {
        this.pageStack.pop();
      } 
    },
    props: ['pageStack'],
    components: {  },
    key: 'key_account'
  }
</script>