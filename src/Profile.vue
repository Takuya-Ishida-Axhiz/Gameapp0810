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
                <div class="center">プロフィール設定</div>
            </ons-toolbar>
            <!-- スマホ用ヘッダー部  end-->
            <div class="mypage-maincontents">
                <div class="gray-back">
                <div class="mypage-thum">
                    <img class="thumImg" src="./img/tlImg.png" alt="" />
                    <!-- /www/img/tlImg.png -->
                </div>
                <div class="mypage-icon-wrapper">
                    <div class="mypage-icon-circle">
                    <img class="mypage-icon-img" src="./img/tlImg.png" alt="" />
                    <!-- /www/img/tlImg.png -->
                    </div>
                </div>
                <div class="mypage-subttl">ユーザー名</div>
                <ul class="list">
                    <a href="" style="display: block;">
                    <li class="list-item list-item--chevron">
                        <div style="height: 76px;" class="list-item__center">
                            <p>{{ name }}</p>
                        </div>
                    </li>
                    </a>
                </ul>
                <div class="mypage-subttl">自己紹介分</div>
                <ul class="list">
                    <a href="" style="display: block;">
                    <li class="list-item list-item--chevron">
                        <div
                        style="height: auto; padding-right: 25px; font-size: 14px;"
                        class="list-item__center"
                        >
                        {{ profile }}
                        </div>
                    </li>
                    </a>
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
        return {
            name:'',
            email:'',
            profile:'',
            photoURL:'',
            tel:'',

            uid:[]
        }
    },




    created(){
        firebase.auth().onAuthStateChanged( (user) => {
        // ログイン済み
        if(user) {
            this.uid = user.uid
            this.GetUserData()
            
        }
        // 未ログイン
        else {
            var ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth())
            ui.start('#firebaseui-auth-container', uiConfig);
            
        }
        })  
    },
    




    methods: {
      pop() {
        this.pageStack.pop();
      },

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
        })}
    },
    props: ['pageStack'],
    components: {  },
    key: 'key_profile',
}
</script>