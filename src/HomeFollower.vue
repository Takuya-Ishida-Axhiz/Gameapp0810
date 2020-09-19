<template id="HomeFollower.html">
  <v-ons-page id="home_follower">
    <!-- <ons-toolbar>
      <div class="center">フォロワー　タブバー</div>
    </ons-toolbar> -->

    <div class="tabbarArea"></div>
    <div class="userlist follower">
      <div
        class="user online"
        @click="pushHomeOtheruser"
      >
        <img src="../src/img/home_event_user.png" alt="" class="user-img" />
      </div>
      <div
        class="user offline"
        @click="pushHomeOtheruser"
      >
        <img src="../src/img/home_event_user.png" alt="" />
      </div>
      <div
        class="user online"
        @click="pushHomeOtheruser"
      >
        <img src="../src/img/home_event_user.png" alt="" class="user-img" />
      </div>
      <div
        class="user offline"
        @click="pushHomeOtheruser"
      >
        <img src="../src/img/home_event_user.png" alt="" />
      </div>
      <div
        class="user offline"
        @click="pushHomeOtheruser"
      >
        <img src="../src/img/home_event_user.png" alt="" />
      </div>
      <div
        class="user offline"
        @click="pushHomeOtheruser"
      >
        <img src="../src/img/home_event_user.png" alt="" />
      </div>
      <div
        class="user offline"
        @click="pushHomeOtheruser"
      >
        <img src="../src/img/home_event_user.png" alt="" />
      </div>
      <div
        class="user offline"
        @click="pushHomeOtheruser"
      >
        <img src="../src/img/home_event_user.png" alt="" />
      </div>
    </div>
    <!-- followerlist -->

    <!-- タイムライン表示 -->
    <div class="timeline follower">
      <div class="ttlbox">
        <div class="ttl">タイムライン</div>
        <!-- <div
          class="sort"
          tappable
          modifier="longdivider"
          onclick="ons.openActionSheet({ buttons: ['最新順', 'いいね順', '超いいね順', 'フォロワー順', 'Cancel'], cancelable: true })"
        > -->
        <div
          class="sort"
          　tappable
          modifier="longdivider"
        >
          最新順
        </div>
      </div>
      <!-- ttlbox -->

      <div class="tlcontents follower">
        <ul class="list">
          <li
            class="list-item list-item--chevron list-item--tappable"
          >
            <div class="list-item__center">
              <div class="user_wrap">
                <div class="icon">
                  <img src="../src/img/home_event_user.png" alt="" />
                </div>
                <div class="name-time_wrap">
                  <div class="name_wrap">
                    <div class="name">remisora</div>
                    <i class="fas fa-chevron-right"></i>
                  </div>
                  <div class="time">10分前</div>
                </div>
              </div>
              <!-- user_wrap -->

              <div class="prev_text">
                もっと上がるけど、組んでないので分からないですが、どんな装備でしょう(･ω･三･ω･)ﾌﾝﾌﾝ
                ちなみに狩猟笛は攻撃特大のみ発動中です
              </div>

              <div class="icon_area">
                <div class="item img row">
                  <img
                    src="../src/img/icon_super_nice_inactive.png"
                    alt=""
                  />
                  <div class="count">10</div>
                </div>
                <div class="item font nice row">
                  <i class="fas fa-heart"></i>
                  <div class="count">15</div>
                </div>
                <div class="item font">
                  <i class="fas fa-bookmark"></i>
                </div>
                <div class="item font retweet">
                  <i class="fas fa-retweet"></i>
                </div>
                <div class="item font share">
                  <i class="fas fa-share"></i>
                </div>
              </div>
              <!-- icon-ara -->
            </div>
            <!-- list-item__center -->
          </li>
          <!-- list-item -->

          <li
            class="list-item list-item--chevron list-item--tappable"
          >
            <div class="list-item__center">
              <div class="user_wrap">
                <div class="icon">
                  <img src="../src/img/home_event_user.png" alt="" />
                </div>
                <div class="name-time_wrap">
                  <div class="name_wrap">
                    <div class="name">remisora</div>
                    <i class="fas fa-chevron-right"></i>
                  </div>
                  <div class="time">10分前</div>
                </div>
              </div>
              <!-- user_wrap -->

              <div class="prev_text">
                もっと上がるけど、組んでないので分からないですが、どんな装備でしょう(･ω･三･ω･)ﾌﾝﾌﾝ
                ちなみに狩猟笛は攻撃特大のみ発動中です
              </div>

              <div class="icon_area">
                <div class="item img row">
                  <img
                    src="../src/img/icon_super_nice_inactive.png"
                    alt=""
                  />
                  <div class="count">10</div>
                </div>
                <div class="item font nice row">
                  <i class="fas fa-heart"></i>
                  <div class="count">15</div>
                </div>
                <div class="item font bookmark">
                  <i class="fas fa-bookmark"></i>
                </div>
                <div class="item font retweet">
                  <i class="fas fa-retweet"></i>
                </div>
                <div class="item font share">
                  <i class="fas fa-share"></i>
                </div>
              </div>
            </div>
            <!-- list-item__center -->
          </li>
          <!-- list-item -->
        </ul>
        <!-- list -->
      </div>
      <!-- tlcontents -->
    </div>
    <!-- timeline -->
  </v-ons-page>
</template>
<!-- HomeFollower.html -->

<script>
// import pushHomeOtheruser from "HomeOtheruser";

// export default {
//   methods: {
//     pop() {
//       this.pageStack.pop();
//     },
//     push() {
//       this.pageStack.push(page2);
//     },
//     pushHomeOtheruser() {
//       this.pageStack.push(HomeOtheruser);
//     }  },
//   props: ["pageStack"],
//   components: {},
//   key: "key_HomeFollower"
// };
</script>


<style>
@import "./css/reset.css";
@import "./css/theme.css";
@import "./css/style.css";
</style>



