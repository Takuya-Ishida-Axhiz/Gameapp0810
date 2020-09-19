<template id="HomeSearchFilter">
  <v-ons-page id="home_search_filter">
    <ons-toolbar>
      <div class="left">
        <ons-back-button></ons-back-button>
      </div>
      <div class="center">絞り込み</div>
    </ons-toolbar>

    <div class="search_box">
      <ons-search-input
        placeholder="キーワードでさがす"
        onchange="ons.notification.alert('Searched for: ' + this.value)"
      ></ons-search-input>
    </div>
    <!-- search_wrap -->

    <ul class="list">
      <!-- ゲーム名 -->
      <li class="list-item add-title">
        <div class="list-item__left">
          <div class="title">ゲーム名</div>
        </div>
        <!-- list-item__left -->
        <div class="list-item__right">
          <div class="title_select">アズールレーン</div>
          <div class="btn_addmygame_wrap">
            <ons-fab
              position="top right"
              class="btn_addmygame"
              @click="pushRoomEditGamettlSearch"
            >
              <i class="fas fa-plus"></i>
            </ons-fab>
          </div>
          <!-- btn_addmygame_wrap -->
        </div>
        <!-- list-item__right -->
      </li>
      <!-- list-item, add-title -->

      <!-- ゲームジャンル -->
      <li class="list-item type">
        <div class="list-item__left">
          <div class="title">ゲームジャンル</div>
        </div>
        <!-- list-item__left -->
        <div class="list-item__right">
          <select class="select-input title_select">
            <option>シューティングゲーム</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
        <!-- list-item__right -->
      </li>
      <!-- list-item, type -->

      <li class="list-item gender">
        <div class="list-item__left">
          <div class="title">性別</div>
        </div>
        <!-- list-item__left -->
        <div class="list-item__right">
          <select class="select-input title_select">
            <option>指定しない</option>
            <option>男性</option>
            <option>女性</option>
          </select>
        </div>
        <!-- list-item__right -->
      </li>
      <!-- list-item, gender -->
    </ul>

    <div class="btn_wrap">
      <ons-button
        class="btn_search"
        @click="pushHomeSearchResult"
        >この条件で検索する</ons-button
      >
    </div>
  </v-ons-page>
</template>
<!-- HomeSearchFilter.html -->


<script>
// import RoomEditGamettlSearch from "RoomEditGamettlSearch";
// import HomeSearchResult from "HomeSearchResult";

// export default {
//   methods: {
//     pop() {
//       this.pageStack.pop();
//     },
//     push() {
//       this.pageStack.push(page2);
//     },
//     pushRoomEditGamettlSearch() {
//       this.pageStack.push(RoomEditGamettlSearch);
//     },
//     pushHomeSearchResult() {
//       this.pageStack.push(HomeSearchResult);
//     }
//   },
//   props: ["pageStack"],
//   components: {},
//   key: "key_HomeSearchFilter"
// };
// </script>

<style>
@import "./css/reset.css";
@import "./css/theme.css";
@import "./css/style.css";

</style>

