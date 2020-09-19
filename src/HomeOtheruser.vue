<template id="HomeOtheruser">
  <v-ons-page id="home_otheruser">
    <ons-toolbar>
      <div class="left">
        <ons-back-button></ons-back-button>
      </div>
      <div class="center">他ユーザー名</div>
      <!-- <div
        class="right sub-menu"
        tappable
        modifier="longdivider"
        onclick="ons.openActionSheet({ buttons: ['xxxxxさんをブロックする', 'Cancel'], cancelable: true })"
      > -->
      <div
        class="right sub-menu"
        tappable
        modifier="longdivider"
      >
        <i class="fas fa-ellipsis-h"></i>
      </div>
      <!-- right, sub-manu -->
    </ons-toolbar>

    <div class="cover_wrap">
      <div class="cover-img">
        <!-- <img src="../src/img/otheruser-cover.jpg" alt="" /> -->
        <img src="" alt="" />
      </div>
      <div class="user-icon"></div>
    </div>
    <!-- cover_wrap -->

    <div class="btn_area">
      <div class="follow_friend_wrap">
        <button class="btn_follow">
          <i class="fas fa-user-plus"></i>フォローする
        </button>
        <!-- トグルボタン -->
        <!-- <button class="btn"></button> -->

        <button
          class="btn_friend"
          tappable
          modifier="longdivider"
          onclick="create_home_applyfriend_dialog()"
        >
          <img src="../src/img/icon_friend_prease.png" alt="" />
          フレンド申請
        </button>
      </div>
      <!-- follow_friend_wrap -->

      <div class="talk_wrap">
        <button class="btn_talk">
          <i class="far fa-comments"></i>トークを見る
        </button>
      </div>
      <!-- talk_wrap -->
    </div>
    <!-- btn_area -->

    <div class="count-list">
      <div
        class="item follow"
        @click="pushHomeOtheruserFollowList"
      >
        <div class="count">20</div>
        <div class="title">フォロー</div>
      </div>
      <div
        class="item friend"
        @click="pushHomeOtheruserFriendList"
      >
        <div class="count">15</div>
        <div class="title">フレンド</div>
      </div>
      <div
        class="item room"
        @click="pushHomeOtheruserRoomList"
      >
        <div class="count">19</div>
        <div class="title">ルーム</div>
      </div>
      <div
        class="item event"
        @click="pushHomeOtheruserEventList"
      >
        <div class="count">10</div>
        <div class="title">イベント</div>
      </div>
      <div
        class="item follower"
        @click="pushHomeOtheruserFollowerList"
      >
        <div class="count">39</div>
        <div class="title">フォロワー</div>
      </div>
    </div>
    <!-- count-list -->

    <div class="self-intro">
      <p>
        社会人です🙋‍♀️<br />
        好きなゲーム💖あんさんぶるスターズ！！Music/MHW/ウィッチャー3/あつまれどうぶつの森/DBD/スプラトゥーン2/ポポロクロイス物語/ぐるみん
      </p>
    </div>
    <!-- self-intro -->

    <div class="list-mygame">
      <div class="title">マイゲーム</div>
      <div class="list">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <!-- list -->
    </div>
    <!-- list-mygame -->

    <div class="recentry-activity">
      <ons-card>
        <div class="img_wrap">
          <!-- <ons-carousel id="carousel" fullscreen swipeable auto-scroll overscrollable initial-index="0">
          <ons-carousel-item class="carousel-item" style="background-color: gray">
          <img src="../src/img/home_follow_tl_detail.jpg" alt="">
          </ons-carousel-item> -->

          <!-- <div class="dots">
          <span id="dot0" class="dot" onclick="fn.swipe(this)">
            &#9679;
          </span>
          <span id="dot1" class="dot" onclick="fn.swipe(this)">
            &#9675;
          </span>
          <span id="dot2" class="dot" onclick="fn.swipe(this)">
            &#9675;
          </span>
        </div> -->
          <!-- dots  カルーセル用 -->
        </div>
        <!-- img_wrap -->
        <div class="content-area">
          <div class="user_follow">
            <div
              class="user_wrap"
              @click="pushHomeOtheruser"
            >
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
              <!-- name-time_wrap -->
            </div>
            <!-- user_wrap -->
          </div>
          <!-- user_follow -->

          <div
            class="prev_text"
            @click="pushHomeFollowTlPost"
          >
            もっと上がるけど、組んでないので分からないですが、どんな装備でしょう(･ω･三･ω･)ﾌﾝﾌﾝ
            ちなみに狩猟笛は攻撃特大のみ発動中です
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
              tappable
              modifier="longdivider"
              onclick="ons.openActionSheet({ buttons: ['リンクをコピー',  'Cancel'], cancelable: true })"
            > -->
            <div
              class="item font share"
              tappable
              modifier="longdivider"
            >
              <i class="fas fa-share"></i>
            </div>
          </div>
          <!-- icon-ara -->
        </div>
        <!-- content-area -->
      </ons-card>
    </div>
    <!-- recentry-activity -->
  </v-ons-page>
</template>
<!-- HomeOtheruser.html -->


<script>
// import HomeOtheruserFollowList from "HomeOtheruserFollowList";
// import HomeOtheruserFriendList from "HomeOtheruserFriendList";
// import HomeOtheruserRoomList from "HomeOtheruserRoomList";
// import HomeOtheruserEventList from "HomeOtheruserEventList";
// import HomeOtheruserFollowerList from "HomeOtheruserFollowerList";
// import HomeFollowTlPost from "HomeFollowTlPost";
// import HomeFollowTlPostSmall from "HomeFollowTlPostSmall";
// import HomeFollowTlPostSmall from "HomeFollowTlPostSmall";
// import HomeFollowTlRetweet from "HomeFollowTlRetweet";

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
//   key: "key_HomeOtheruser"
// };
</script>


<style>
@import "./css/reset.css";
@import "./css/theme.css";
@import "./css/style.css";
</style>




