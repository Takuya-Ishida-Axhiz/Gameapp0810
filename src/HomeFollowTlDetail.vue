    <template id="HomeFollowTlDetail">
      <v-ons-page id="home_follow_tl_detail">
        <ons-toolbar>
          <div class="left">
            <ons-back-button></ons-back-button>
          </div>
          <div class="center">ふぇぐ</div>
        </ons-toolbar>

        <ons-pull-hook id="pull-hook" threshold-height="200px">
          <ons-icon
            id="pull-hook-icon"
            size="22px"
            class="pull-hook-content"
            icon="fa-arrow-down"
          ></ons-icon>
        </ons-pull-hook>

        <ons-card>
          <div class="img_wrap">
            <ons-carousel
              id="carousel"
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
                <img src="../src/img/home_follow_tl-detail.jpg" alt="" />
              </ons-carousel-item>

              <ons-carousel-item
                class="carousel-item"
                style="background-color: #085078"
              >
                <div class="color-tag">カルーセル2</div>
              </ons-carousel-item>

              <ons-carousel-item
                class="carousel-item"
                style="background-color: #d38312"
              >
                <div class="color-tag">カルーセル3</div>
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
              <div
                class="item font share"
                id="share"
                tappable
                modifier="longdivider"
                onclick="ons.openActionSheet({ buttons: ['リンクをコピー',  'Cancel'], cancelable: true })"
              >
                <i class="fas fa-share"></i>
              </div>
            </div>
            <!-- icon-ara -->

            <ons-button
              modifier="quiet"
              class="comment_more"
              @click="pushHomeFollowTlPostSmall"
              >コメント<span class="coutnt">1</span
              >件をすべて見る</ons-button
            >
            <!-- comment-more -->
          </div>
          <!-- content-area -->
        </ons-card>

        <ons-card>
          <div class="img_wrap">
            <ons-carousel
              id="carousel"
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
                <img src="../src/img/home_follow_tl-detail.jpg" alt="" />
              </ons-carousel-item>

              <ons-carousel-item
                class="carousel-item"
                style="background-color: #085078"
              >
                <div class="color-tag">カルーセル2</div>
              </ons-carousel-item>

              <ons-carousel-item
                class="carousel-item"
                style="background-color: #d38312"
              >
                <div class="color-tag">カルーセル3</div>
              </ons-carousel-item>
            </ons-carousel>

            <div class="dots">
              <span id="dot0" class="dot" onclick="fn.swipe(this)">
                &#9679;
              </span>
              <span id="dot1" class="dot" onclick="fn.swipe(this)">
                &#9675;
              </span>
              <span id="dot2" class="dot" onclick="fn.swipe(this)">
                &#9675;
              </span>
            </div>
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
                　id="share"
                tappable
                modifier="longdivider"
                onclick="ons.openActionSheet({ buttons: ['リンクをコピー',  'Cancel'], cancelable: true })"
              >
                <i class="fas fa-share"></i>
              </div>
            </div>
            <!-- icon-ara -->

            <ons-button
              modifier="quiet"
              class="comment_more"
              @click="pushHomeFollowTlPostSmall"
              >コメント<span class="coutnt">1</span
              >件をすべて見る</ons-button
            >
            <!-- comment-more -->
          </div>
          <!-- content-area -->
        </ons-card>
      </v-ons-page>
      <!-- HomeFollowTlDetail.html -->
    </template>
    <!-- HomeFollowTlDetail.html -->

<script>
  // import pushHomeOtheruser from "HomeOtheruser";
  // import pushHomeFollowTlPost from "HomeFollowTlPost";
  // import pushHomeFollowTlPostSmall from "HomeFollowTlPostSmall";
  // import pushHomeFollowTlRetweet from "HomeFollowTlRetweet";

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
  //     }
  //   },
  //   props: ["pageStack"],
  //   components: {},
  //   key: "key_HomeFollowTlDetail"
  // };
</script>


<style>
@import "./css/reset.css";
@import "./css/theme.css";
@import "./css/style.css";
</style>
