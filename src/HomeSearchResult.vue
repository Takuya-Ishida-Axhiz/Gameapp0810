<template id="HomeSearchResult">
  <v-ons-page id="home_search_result">
    <ons-toolbar>
      <div class="left">
        <ons-back-button></ons-back-button>
      </div>
      <div class="center search_box">
        <ons-search-input
          placeholder="キーワードでさがす"
          onchange="ons.notification.alert('Searched for: ' + this.value)"
        ></ons-search-input>
        <div
          class="search_option"
          @click="pushHomeSearchFilter"
        >
          <img src="../src/img/iconSearchOption.png" alt="" />
        </div>
      </div>
      <!-- center,search_box -->
    </ons-toolbar>

    <!-- 検索結果＞タブバー -->
    <div class="home_search_result_tabbar">
      <ons-tabbar swipeable position="top" tab-border>
        <ons-tab
          page="HomeSearchResultRoom.html"
          label="ルーム"
          icon=""
          badge=""
          active
        >
        </ons-tab>
        <!-- HomeSearchResultRoom.html -->

        <ons-tab
          page="HomeSearchResultEvent.html"
          label="イベント"
          icon=""
          badge=""
        >
        </ons-tab>
        <!-- HomeSearchResultEvent.html -->

        <ons-tab
          page="HomeSearchResultUser.html"
          label="ユーザー"
          icon=""
        >
        </ons-tab>
        <!-- search_result_user.html -->
      </ons-tabbar>
    </div>
    <!-- home_search_result_tabbar -->

  </v-ons-page>
</template>
<!-- HomeSearchResult.html -->


<script>
// import HomeSearchFilter from "HomeSearchFilter";
// import HomeOtheruser from "HomeOtheruser";

// export default {
//   methods: {
//     pop() {
//       this.pageStack.pop();
//     },
//     push() {
//       this.pageStack.push(page2);
//     },
//     pushHomeSearchFilter() {
//       this.pageStack.push(HomeSearchFilter);
//     },
//     pushHomeOtheruser() {
//       this.pageStack.push(HomeOtheruser);
//     }
//   },
//   props: ["pageStack"],
//   components: {},
//   key: "key_HomeSearchResult"
// };
// </script>

<style>
@import "./css/reset.css";
@import "./css/theme.css";
@import "./css/style.css";

</style>
