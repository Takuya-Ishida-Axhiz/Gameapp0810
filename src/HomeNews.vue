<template id="HomeNews">
  <v-ons-page id="home_news">
    <ons-toolbar>
      <div class="left">
        <ons-back-button></ons-back-button>
      </div>
      <div class="center">お知らせ</div>
      <div class="right">すべて既読にする</div>
    </ons-toolbar>

    <div class="news_tabbar">
      <ons-tabbar swipeable position="top" tab-border>
        <!-- ホーム＞ニュース＞あなた宛 -->
        <ons-tab
          page="HomeNewsForyou.html"
          label="あなた宛"
          icon=""
          badge=""
          active
        >
        </ons-tab>
        <!-- ホーム＞ニュース＞あなた宛 -->

        <!-- ホーム＞ニュース＞運営から -->
        <ons-tab
          page="HomeNewsSystem.html"
          label="ニュース"
          icon=""
        >
        </ons-tab>
        <!-- ホーム＞ニュース＞運営から -->
      </ons-tabbar>
    </div>
    <!-- news_tabbar -->

  </v-ons-page>
</template>
<!-- HomeNews.html -->

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
//     }  },
//   props: ["pageStack"],
//   components: {},
//   key: "key_HomeNews"
// };
</script>


<style>
@import "./css/reset.css";
@import "./css/theme.css";
@import "./css/style.css";
</style>



