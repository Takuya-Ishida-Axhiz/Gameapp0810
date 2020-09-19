<template id="HomeFollowTlRetweet">
  <v-ons-page id="home_follow_tl_retweet">
    <ons-toolbar>
      <div class="left">
        <ons-back-button></ons-back-button>
      </div>
      <div class="center">リツイート</div>
    </ons-toolbar>

    <ons-card class="tl-comment">
      <div class="img_wrap"></div>
      <!-- img_wrap -->

      <div class="content-area">
        <div class="user_follow">
          <div
            class="user_wrap"
            @click="pushHomeOtheruser"
          >
            <div class="icon">
              <img src="../src/img/friendIcon.png" alt="" />
            </div>
            <div class="name-time_wrap">
              <div class="name_wrap">
                <div class="name">ひたぎ</div>
                <i class="fas fa-chevron-right"></i>
              </div>
              <div class="time">10分前</div>
            </div>
            <!-- name-time_wrap -->
          </div>
          <!-- user_wrap -->
          <ons-button class="btn_follow"
            ><i class="fas fa-user-plus"></i>フォローする</ons-button
          >

          <!-- <div
            class="sub-menu"
            tappable
            modifier="longdivider"
            onclick="ons.openActionSheet({ buttons: ['リンクをコピー', 'フォローをやめる', 'Cancel'], cancelable: true })"
          > -->
          <div
            class="sub-menu"
            tappable
            modifier="longdivider"
          >
            <i class="fas fa-ellipsis-h"></i>
          </div>
          <!-- sub-menu -->
        </div>
        <!-- user_follow -->

        <div
          class="prev_text"
          @click="pushHomeFollowTlPost"
        >
          ヤバイな、まじでラージャンといちゃつくの楽しくなってきた。これは中毒性あるぞ
        </div>
        <div class="icon_area">
          <div class="item img row">
            <img src="../src/img/icon_super_nice_inactive.png" alt="" />
            <div class="count">10</div>
          </div>
          <div class="item font nice row">
            <i class="fas fa-heart"></i>
            <div class="count">15</div>
          </div>
          <div class="item font bookmark">
            <i class="fas fa-bookmark"></i>
          </div>
          <!-- <div class="item font comment row"> -->
          <div
            class="item font comment row"
            @click="pushHomeFollowTlPostSmall"
          >
            <i class="far fa-comment"></i>
            <div class="count">1</div>
          </div>
          <div
            class="item font retweet"
            @click="pushHomeFollowTlRetweet"
          >
            <i class="fas fa-retweet"></i>
          </div>
          <!-- <div
            class="item font share"
            id="share2"
            tappable
            modifier="longdivider"
            onclick="ons.openActionSheet({ buttons: ['リンクをコピー',  'Cancel'], cancelable: true })"
          > -->
          <div
            class="item font share"
            id="share2"
            tappable
            modifier="longdivider"
          >
            <i class="fas fa-share"></i>
          </div>
        </div>
        <!-- icon-ara -->

        <div
          class="nice_count_wrap"
          @click="pushHomeFollowTlSuperniceList"
        >
          <div class="supernice_wrap">
            「超いいね！」<span class="count">4</span>件
          </div>
          <!-- super_nice_wrap -->
          <div
            class="nice_wrap"
            @click="pushHomeFollowTlNiceLlist"
          >
            「いいね！」<span class="count">15</span>件
          </div>
          <!-- nice_wrap -->

          <!-- <ons-button modifier="quiet" class="btn_reply">返信する</ons-button> -->

          <!-- reply_wrap -->
        </div>
        <!-- nice_count_wrap -->
      </div>
      <!-- content-area -->
    </ons-card>

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

    <!-- 写真選択・リツイートボタンエリア -->
    <div class="imgselect_post">
      <ons-button modifier="quiet" class="cam"
        ><i class="fas fa-camera cam"></i
      ></ons-button>
      <ons-button modifier="quiet" class="img"
        ><i class="far fa-image img"></i
      ></ons-button>
      <ons-button modifier="quiet" class="post"
        >リツイート</ons-button
      >
    </div>
  </v-ons-page>
</template>
<!-- HomeFollowTlRetweet.html -->


<script>
// import HomeOtheruser from "HomeOtheruser";
// import HomeFollowTlPost from "HomeFollowTlPost";
// import HomeFollowTlPostSmall from "HomeFollowTlPostSmall";
// import HomeFollowTlRetweet from "HomeFollowTlRetweet";
// import HomeFollowTlSuperniceList from "HomeFollowTlSuperniceList";
// import HomeFollowTlNiceLlist from "HomeFollowTlNiceLlist";

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
//     },
//     pushHomeFollowTlPost() {
//       this.pageStack.push(HomeFollowTlPost);
//     },
//     pushHomeFollowTlPostSmall() {
//       this.pageStack.push(HomeFollowTlPostSmall);
//     },
//     pushHomeFollowTlRetweet() {
//       this.pageStack.push(HomeFollowTlRetweet);
//     },
//     pushHomeFollowTlSuperniceList() {
//       this.pageStack.push(HomeFollowTlSuperniceList);
//     },
//     pushHomeFollowTlNiceLlist() {
//       this.pageStack.push(HomeFollowTlNiceLlist);
//     }
//   },
//   props: ["pageStack"],
//   components: {},
//   key: "key_HomeFollowTlRetweet"
// };
</script>

<style>
@import "./css/reset.css";
@import "./css/theme.css";
@import "./css/style.css";

</style>
