<template>
<v-ons-page>
<div>
  <Login></Login>
  <div>
    <!-- <li v-for="myTweet in myTweets" :key="user_id" > -->
      <!-- {{myTweet.tweet}} -->
    <!-- </li> -->

    <!-- <li v-for="myTweet in orderBy(myTweets,'date',-1)" :key="myTweet.id"> <!-- 'v-for'の中身を変更-->
      <!-- {{ myTweet.tweet }} -->
    <!-- </li> --> -->
   
  </div>
  <p>AAAAA</p>
  <!-- <p>{{ currentUser }}</p> -->
  
  <p>{{ uid }}</p>
  <!-- <p>{{ currentUser.uid }}</p> -->
  <!-- <button @click='toMypage'></button> -->
  
</div>
</v-ons-page>

</template>


<script>
import Login from 'Login'

import firebase from "firebase";
import {db} from 'main.js';
import 'firebase/auth';    
import Vue2Filters from 'vue2-filters'  

export default {
  name:'home',
  components:{
    Login
  },

  // props:[
  //   'currentUser'
  // ],

  data(){
    return{
      currentUser:{}, 
      uid:[],
      myTweets:'',
      tweets:{}
    }
  },

  


  created() {
    firebase.auth().onAuthStateChanged( (user) => {
        this.uid = user.uid
        // this.GetMyTweet()
  })
  },

  // firestore(){
  //   return{
  //     // myTweets: db.collection("tweets").where("uid", "==",this.uid)
  //   }
  // },

  methods:{

    // GetMyTweet(){
    //   db.collection("tweets").where('uid','==',this.uid)
    //   .get()
    //   .then(function(querySnapshot) {
    //       querySnapshot.forEach(function(doc) {
    //           // doc.data() is never undefined for query doc snapshots
    //           console.log(doc.id, " => ", doc.data());
    //       });
    //   })
    //   .catch(function(error) {
    //       console.log("Error getting documents: ", error);
    //   });

    // },

    GetMyTweet(){
      let s = this
      db.collection("tweets").where("uid", "==",this.uid)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              s.myTweets.push(doc.data().tweet)
          });
          console.log(myTweets)
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });
      }


  },

  mounted(){
      db.collection("tweets").where("uid", "==",this.uid).get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.myTweets.push(doc.data())
        })
        console.log(this.myTweets)
      })
  },

  mixins: [Vue2Filters.mixin] 
}
</script>



<style>

</style>
