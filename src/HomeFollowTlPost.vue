<template id="HomeFollowTlPost">
  <v-ons-page id="home_follow_tl_post">
    <ons-toolbar>
      <div class="left">
        <ons-back-button></ons-back-button>
      </div>
      <div class="center">投稿</div>
    </ons-toolbar>

    <div class="post_contents">
      <div class="text_wrap">
        <textarea
          class="textarea"
          rows="1"
          placeholder="コメントする"
        ></textarea>
        <div class="count_wrap">
          <div class="count">0</div>
          / 200
        </div>
      </div>
      <!-- text_wrap -->

      <div class="prev-img">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <!-- prev-img -->
    </div>
    <!-- post-contets -->

    <!-- 写真選択・投稿ボタンエリア -->
    <div class="imgselect_post">
      <ons-button modifier="quiet" class="cam"
        ><i class="fas fa-camera cam"></i></ons-button>
      <ons-button modifier="quiet" class="img"
        ><i class="far fa-image img"></i></ons-button>
      <ons-button modifier="quiet" class="post">投稿</ons-button>
    </div>
  </v-ons-page>
</template>
<!-- HomeFollowTlPost.html -->



<script>
// import HomeFollowTlPost from "HomeFollowTlPost";

// export default {
//   methods: {
//     pop() {
//       this.pageStack.pop();
//     },
//     push() {
//       this.pageStack.push(page2);
//     },
//     pushHomeFollowTlPost() {
//       this.pageStack.push(HomeFollowTlPost);
//     },
//     pushHomeFollowTlDetail() {
//       this.pageStack.push(HomeFollowTlDetail);
//     },
//     HomeTlSortFollow() {
//       this.pageStack.push(HomeTlSortFollow);
//     },
//     pushHomeOtheruser() {
//       this.pageStack.push(HomeOtheruser);
//     },
//     pushHomeFollowTlRetweet() {
//       this.pageStack.push(HomeFollowTlRetweet);
//     }
//   },
//   props: ["pageStack"],
//   components: {},
//   key: "key_HomeFollow"
// };
</script>

<style>
@import "./css/reset.css";
@import "./css/theme.css";
@import "./css/style.css";

</style>

