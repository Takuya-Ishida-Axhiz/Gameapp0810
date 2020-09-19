<template id="HomeFollowTlPostSmall">
  <v-ons-page id="home_follow_tl_post_small">
    <ons-toolbar>
      <div class="left">
        <ons-back-button></ons-back-button>
      </div>
      <div class="center">コメント</div>
    </ons-toolbar>

    <ons-card class="tl_content">
      <div class="img_wrap">
        <ons-carousel
          id="carousel2"
          fullscreen
          swipeable
          auto-scroll
          overscrollable
          initial-index="0"
        >
          <ons-carousel-item
            class="carousel-item"
            style="background-color: gray"
          >
            <img src="" />
            <!-- <img src="../src/img/home_follow_tl_detail.jpg" alt="" /> -->
          </ons-carousel-item>
        </ons-carousel>
      </div>
      <!-- img_wrap -->

      <div class="content-area">
        <div class="user_follow">
          <div
            class="user_wrap"
            @click="pushHomeOtheruser"
          >
            <div class="icon">
              <!-- <img src="" alt="" /> -->
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
          <ons-button class="btn_follow"
            ><i class="fas fa-user-plus"></i>フォローする</ons-button
          >

          <div
            class="sub-menu"
            tappable
            modifier="longdivider"
            onclick="ons.openActionSheet({ buttons: ['リンクをコピー', 'フォローをやめる', 'Cancel'], cancelable: true })"
          >
            <i class="fas fa-ellipsis-h"></i>
          </div>
          <!-- sub-menu -->
        </div>
        <!-- user_follow -->

        <div
          class="prev_text"
          @click="pushHomeOtheruser"
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
          <div
            class="item font share"
            id="share2"
            tappable
            modifier="longdivider"
            onclick="ons.openActionSheet({ buttons: ['リンクをコピー',  'Cancel'], cancelable: true })"
          >
            <i class="fas fa-share"></i>
          </div>
        </div>
        <!-- icon-ara -->
      </div>
      <!-- content-area -->
    </ons-card>
    <!-- tl_content -->

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
              <img src="" alt="" />
              <!-- <img src="../src/img/friendIcon.png" alt="" /> -->
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

          <div
            class="sub-menu"
            tappable
            modifier="longdivider"
            onclick="ons.openActionSheet({ buttons: ['リンクをコピー', 'フォローをやめる', 'Cancel'], cancelable: true })"
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
            <img src="" alt="" />
            <!-- <img src="../src/img/icon_super_nice_inactive.png" alt="" /> -->
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
          <div
            class="item font share"
            id="share2"
            tappable
            modifier="longdivider"
            onclick="ons.openActionSheet({ buttons: ['リンクをコピー',  'Cancel'], cancelable: true })"
          >
            <i class="fas fa-share"></i>
          </div>
        </div>
        <!-- icon-ara -->

        <div class="nice_count_wrap">
          <div
            class="supernice_wrap"
            @click="pushHomeFollowTlSuperniceList"
          >
            「超いいね！」<span class="count">4</span>件
          </div>
          <!-- supernice_wrap -->
          <div
            class="nice_wrap"
            @click="pushHomeFollowTlNiceLlist"
          >
            「いいね！」<span class="count">15</span>件
          </div>
          <!-- nice_wrap -->

          <ons-button modifier="quiet" class="btn_reply"
            >返信する</ons-button
          >

          <!-- reply_wrap -->
        </div>
        <!-- nice_count_wrap -->
      </div>
      <!-- content-area -->
    </ons-card>
    <!-- tl-comment -->

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
              <img src="" alt="" />
              <!-- <img src="../src/img/friendIcon.png" alt="" /> -->
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

          <div
            class="sub-menu"
            tappable
            modifier="longdivider"
            onclick="ons.openActionSheet({ buttons: ['リンクをコピー', 'フォローをやめる', 'Cancel'], cancelable: true })"
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
            <img src="" alt="" />
            <!-- <img src="../src/img/icon_super_nice_inactive.png" alt="" /> -->
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
          <div
            class="item font share"
            id="share2"
            tappable
            modifier="longdivider"
            onclick="ons.openActionSheet({ buttons: ['リンクをコピー',  'Cancel'], cancelable: true })"
          >
            <i class="fas fa-share"></i>
          </div>
        </div>
        <!-- icon-ara -->

        <div
          class="nice_count_wrap"
          @click="pushHomeFollowTlSuperniceList"
        >
          <div class="super_nice_wrap">
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

          <ons-button modifier="quiet" class="btn_reply"
            >返信する</ons-button
          >

          <!-- reply_wrap -->
        </div>
        <!-- nice_count_wrap -->
      </div>
      <!-- content-area -->
    </ons-card>
    <!-- tl-comment -->

    <div class="post_contents_wrap">
      <div class="post_contents">
        <div class="text_wrap">
          <textarea
            class="textarea"
            rows="1"
            placeholder="コメントする"
          ></textarea>
          <ons-button
            modifier="quiet"
            class="btn_expand"
            @click="pushHomeFollowTlPost"
          >
            <i class="fas fa-expand-arrows-alt"></i>
          </ons-button>
          <!-- btn-expand -->
        </div>
        <!-- text_wrap -->
      </div>
      <!-- post_contents -->

      <!-- 写真選択・投稿ボタンエリア -->
      <div class="imgselect_post">
        <ons-button modifier="quiet" class="cam"
          ><i class="fas fa-camera cam"></i
        ></ons-button>
        <ons-button modifier="quiet" class="img"
          ><i class="far fa-image img"></i
        ></ons-button>
        <ons-button modifier="quiet" class="post">投稿</ons-button>
      </div>
      <!-- imgselect_post -->
    </div>
    <!-- post_contents_wrap -->
    
  </v-ons-page>
</template>
<!-- HomeFollowTlPostSmall.html -->

<script>
  // import pushHomeOtheruser from "pushHomeOtheruser";  import pushHomeFollowTlPostSmall from "pushHomeFollowTlPostSmall";
  // import pushHomeFollowTlRetweet from "pushHomeFollowTlRetweet";
  // import pushHomeFollowTlPost from "pushHomeFollowTlPost";
  // import pushHomeFollowTlSuperniceList from "pushHomeFollowTlSuperniceList";
  // import pushHomeFollowTlNiceLlist from "pushHomeFollowTlNiceLlist";

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
  //     pushHomeFollowTlPostSmall() {
  //       this.pageStack.push(HomeFollowTlPostSmall);
  //     },
  //     pushHomeFollowTlRetweet() {
  //       this.pageStack.push(HomeFollowTlRetweet);
  //     },
  //     pushHomeFollowTlPost() {
  //       this.pageStack.push(HomeFollowTlPost);
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
  //   key: "key_HomeFollowTlPostSmall"
  // };
</script>

<style>
@import "./css/reset.css";
@import "./css/theme.css";
@import "./css/style.css";

</style>
