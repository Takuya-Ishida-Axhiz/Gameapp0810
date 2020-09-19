<template id="HomeSearch">
  <v-ons-page id="home_search">
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

    <div class="contents">
      <div class="feature_game">
        <div class="outer">
          <div class="title_wrap">
            <div class="title">注目のゲーム</div>
            <div class="view_all">
              <i class="fas fa-chevron-right"></i>すべて見る
            </div>
          </div>
          <ul class="list line1">
            <li class="list-item"></li>
          </ul>
          <ul class="list line2">
            <li class="list-item"></li>
            <li class="list-item"></li>
          </ul>
        </div>
        <!-- outer -->
      </div>
      <!-- feature_game -->

      <div class="ranking_game">
        <div class="outer">
          <div class="title_wrap">
            <div class="title">人気ランキング（週間）</div>
            <div class="view_all">
              <i class="fas fa-chevron-right"></i>すべて見る
            </div>
          </div>
        </div>
        <!-- outer -->
      </div>
      <!-- ranking_game -->

      <div class="popularity_room">
        <div class="outer">
          <div class="title_wrap">
            <div class="title">人気のルーム</div>
            <div class="view_all">
              <i class="fas fa-chevron-right"></i>すべて見る
            </div>
          </div>
        </div>
        <!-- outer -->
      </div>
      <!-- popularity_room -->
    </div>
    <!-- contents -->
  </v-ons-page>
</template>
<!-- HomeSearch.html -->


<script>
// import HomeSearchFilter from "HomeSearchFilter";

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
//     }
//   },
//   props: ["pageStack"],
//   components: {},
//   key: "key_HomeSearch"
// };
// </script>

<style>
@import "./css/reset.css";
@import "./css/theme.css";
@import "./css/style.css";

</style>


