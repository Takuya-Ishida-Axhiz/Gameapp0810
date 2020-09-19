<template>
        <!-- ホーム内タブバー -->
        <v-ons-tabbar swipeable position="top" tab-border>

            <v-ons-tabbar position="auto"
            :tabs="tabs"
            :visible="true"
            :index.sync="activeIndex"
            >
            </v-ons-tabbar>

        </v-ons-tabbar>
        <!-- /ons-tabbar -->
</template>


<script>
import HomeFollow from 'HomeFollow'

export default {

    components: { 
        HomeFollow,
  },


    data() {
    return {   
      activeIndex: 0,
      tabs: [
            {
                icon: this.md() ? null : 'ion-home',
                label: '',
                page: HomeFollow,
                class: follow,
                props: {
                    currentUser: 'this.currentUser'
                },
            }
            // {
            //     icon: this.md() ? null : 'ion-chat',
            //     label: 'Chat',
            //     page: chat
            // },
            // {
            //     icon: this.md() ? null : 'ion-ios-bell',
            //     label: 'News',
            //     page: newsPage,
            //     badge: 3
            // },
            // {
            //     icon: this.md() ? null : 'ion-ios-MypageNavi',
            //     label: 'Mypage',
            //     page: MypageNavi
            // },
            // {
            //     icon: this.md() ? null : 'ion-ios-test',
            //     label: 'Test',
            //     page: test
            // }
          ]
      }
  },

  computed: {
    title() {
      return this.tabs[this.activeIndex].label;
    }
  }


    
}
</script>



<style>
   @import "../css/style.css";
</style>


            // <!-- フッターホーム＞フォロー -->
            // <ons-tab page="home_follow.html" label="フォロー" icon="" badge="" class="follow" active>
            // </ons-tab>
            // <!-- home_follow.html -->

            // <!-- フッターホーム＞フレンド -->
            // <ons-tab page="home_friend.html" label="フレンド" icon="">
            // </ons-tab>
            // <!-- home_friend.html -->

            // <!-- フッターホーム＞ルーム -->
            // <ons-tab page="home_room.html" label="ルーム" icon="">
            // </ons-tab>
            // <!-- home_room.html -->

            // <!-- フッターホーム＞イベント -->
            // <ons-tab page="home_event.html" label="イベント" icon="">
            // </ons-tab>
            // <!-- home_event.html -->

            // <!-- フッターホーム＞フォロワー -->
            // <ons-tab page="home_follower.html" label="フォロワー" icon="">
            // </ons-tab>
            // <!-- home_follower.html -->