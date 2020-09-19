<template id="HomeFollow">
  <v-ons-page id="home_follow">
    <div class="tabbarArea"></div>

    <!-- 投稿追加ボタン -->
    <ons-fab position="bottom right" class="btn_addpost" @click="pushHomeFollowTlPost">
      <i class="fas fa-plus"></i>
    </ons-fab>

    <div class="userlist follow">
      <div class="user online">
        <img src="../src/img/followIcon.png" alt class="user-img" @click="pushHomeFollowTlDetail" />
      </div>
      <div class="user offline">
        <img src="../src/img/followIcon.png" alt class="user-img" @click="pushHomeFollowTlDetail" />
      </div>
      <div class="user online">
        <img src="../src/img/followIcon.png" alt class="user-img" @click="pushHomeFollowTlDetail" />
      </div>
      <div class="user offline">
        <img src="../src/img/followIcon.png" alt class="user-img" @click="pushHomeFollowTlDetail" />
      </div>
      <div class="user online">
        <img src="../src/img/followIcon.png" alt class="user-img" @click="pushHomeFollowTlDetail" />
      </div>
      <div class="user offline">
        <img src="../src/img/followIcon.png" alt class="user-img" @click="pushHomeFollowTlDetail" />
      </div>
      <div class="user offline">
        <img src="../src/img/followIcon.png" alt class="user-img" @click="pushHomeFollowTlDetail" />
      </div>
      <div class="user offline">
        <img src="../src/img/followIcon.png" alt class="user-img" @click="pushHomeFollowTlDetail" />
      </div>
    </div>
    <!-- followUserlist -->

    <!-- タイムライン表示 -->
    <div class="timeline follow">
      <div class="ttlbox">
        <div class="ttl">タイムライン</div>
        <div class="sort" tappable modifier="longdivider" @click="pushHomeTlSortFollow">最新順</div>
      </div>
      <!-- ttlbox -->

      <div class="tlcontents follow">
        <div class="item">
          <div class="img_box" @click="pushHomeFollowTlDetail">
            <img src="../src/img/tlImg.png" alt />
          </div>
          <!-- img_box -->

          <div class="txt_box" @click="pushHomeFollowTlDetail">僕は蠱毒使いにはスタミナ系と攻撃系の旋律を優先…</div>
          <!-- txt_box -->

          <div class="user_box">
            <div class="icon" @click="pushHomeOtheruser">
              <img src="../src/img/tlUser.png" alt />
            </div>
            <!-- icon -->
            <div class="name" @click="pushHomeOtheruser">ふぇぐ</div>
            <!-- name -->
            <div class="nice">
              <i class="fas fa-heart"></i>
            </div>
            <!-- nice -->

            <div class="retweet" @click="pushHomeFollowTlRetweet">
              <i class="fas fa-retweet"></i>
            </div>
            <!-- retweet -->
          </div>
          <!-- user_box -->
        </div>
        <!-- item -->

        <div class="item">
          <div class="img_box" @click="pushHomeFollowTlDetail">
            <img src="../src/img/tlImg.png" alt />
          </div>
          <!-- img_box -->

          <div class="txt_box" @click="pushHomeFollowTlDetail">僕は蠱毒使いにはスタミナ系と攻撃系の旋律を優先…</div>
          <!-- txt_box -->

          <div class="user_box">
            <div class="icon" @click="pushPageHomeOtheruser">
              <img src="../src/img/tlUser.png" alt />
            </div>
            <!-- icon -->
            <div class="name" @click="pushHomeOtheruser">ふぇぐ</div>
            <!-- name -->
            <div class="nice">
              <i class="fas fa-heart"></i>
            </div>
            <!-- nice -->

            <div class="retweet" @click="pushHomeFollowTlRetweet">
              <i class="fas fa-retweet"></i>
            </div>
            <!-- retweet -->
          </div>
          <!-- user_box -->
        </div>
        <!-- item -->

        <div class="item">
          <div class="img_box" @click="dpushHomeFollowTlDetail">
            <img src="../src/img/tlImg.png" alt />
          </div>
          <!-- img_box -->

          <div class="txt_box" @click="pushHomeFollowTlDetail">僕は蠱毒使いにはスタミナ系と攻撃系の旋律を優先…</div>
          <!-- txt_box -->

          <div class="user_box">
            <div class="icon" @click="pushHomeOtheruser">
              <img src="../src/img/tlUser.png" alt />
            </div>
            <!-- icon -->
            <div class="name" @click="pushHomeOtheruser">ふぇぐ</div>
            <!-- name -->
            <div class="nice">
              <i class="fas fa-heart"></i>
            </div>
            <!-- nice -->

            <div class="retweet" @click="pushHomeFollowTlRetweet">
              <i class="fas fa-retweet"></i>
            </div>
            <!-- retweet -->
          </div>
          <!-- user_box -->
        </div>
        <!-- item -->

        <div class="item">
          <div class="img_box" @click="pushHomeFollowTlDetail">
            <img src="../src/img/tlImg.png" alt />
          </div>
          <!-- img_box -->

          <div class="txt_box" @click="pushHomeFollowTlDetail">僕は蠱毒使いにはスタミナ系と攻撃系の旋律を優先…</div>
          <!-- txt_box -->

          <div class="user_box">
            <div class="icon" @click="pushHomeOtheruser">
              <img src="../src/img/tlUser.png" alt />
            </div>
            <!-- icon -->
            <div class="name" @click="pushHomeOtheruser">ふぇぐ</div>
            <!-- name -->
            <div class="nice">
              <i class="fas fa-heart"></i>
            </div>
            <!-- nice -->

            <div class="retweet" @click="pushHomeFollowTlRetweet">
              <i class="fas fa-retweet"></i>
            </div>
            <!-- retweet -->
          </div>
          <!-- user_box -->
        </div>
        <!-- item -->
      </div>
      <!-- contents -->
    </div>
    <!-- timeline -->
  </v-ons-page>
</template>

<script>
import app from "./App";
import HomeFollowTlPost from "HomeFollowTlPost";
import HomeFollowTlDetail from "HomeFollowTlDetail";
// import HomeTlSortFollow from "HomeTlSortFollow";
import HomeOtheruser from "HomeOtheruser";
import HomeFollowTlRetweet from "HomeFollowTlRetweet";

export default {
  methods: {
    pop() {
      this.pageStack.pop();
    },
    push() {
      this.pageStack.push(page2);
    },
    pushHomeFollowTlPost() {
      this.pageStack.push(HomeFollowTlPost);
    },
    pushHomeFollowTlDetail() {
      this.pageStack.push(HomeFollowTlDetail);
    },
    // HomeTlSortFollow() {
    //   this.pageStack.push(HomeTlSortFollow);
    // }
    pushHomeOtheruser() {
      this.pageStack.push(HomeOtheruser);
    },
    pushHomeFollowTlRetweet() {
      this.pageStack.push(HomeFollowTlRetweet);
    }
  },
  props: ["pageStack"],
  components: {},
  key: "key_HomeFollow"
};
</script>

<style>
@import "./css/reset.css";
@import "./css/theme.css";
@import "./css/style.css";
</style>
