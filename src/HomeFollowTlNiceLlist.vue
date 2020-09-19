<template id="HomeFollowTlNiceLlist">
  <v-ons-page id="home_follow_tl_nice_list">
    <ons-toolbar>
      <div class="left">
        <ons-back-button></ons-back-button>
      </div>
      <div class="center">いいね！したアカウント</div>
    </ons-toolbar>

    <!-- 検索結果 -->
    <div class="contents">
      <ul class="list">
        <li class="list-item">
          <div class="list-item__left">
            <img
              class="list-item__thumbnail"
              src="../src/img/friendIcon.png"
              alt=""
            />
          </div>
          <!-- list-item__left -->

          <div class="list-item__center">
            <div class="text_wrap">
              <div
                class="username"
                @click="pushHomeOtheruser"
              >
                ユーザー名
              </div>
              <i class="fas fa-chevron-right"></i>
            </div>
            <div class="list-item__preText">
              自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介
            </div>
          </div>
          <!-- list-item__center -->

          <div class="list-item__right">
            <ons-button class="btn_follow"
              ><i class="fas fa-user-plus"></i>フォロー</ons-button
            >
          </div>
        </li>
        <!-- list-item -->
      </ul>
    </div>
    <!-- contents -->
  </v-ons-page>
</template>
<!-- HomeFollowTlNiceLlist.html -->



<script>
// import HomeOtheruser from "HomeOtheruser";

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
//     }
//   },
//   props: ["pageStack"],
//   components: {},
//   key: "key_HomeFollow"
// };
// </script>

<style>
@import "./css/reset.css";
@import "./css/theme.css";
@import "./css/style.css";

</style>
