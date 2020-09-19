<template id="HomeSearchResultUser">
  <v-ons-page id="home_search_result_user">
    <div class="content">
      <!-- 検索結果 -->
      <div class="result">
        <ul class="list">
          <li
            class="list-item list-item--chevron list-item--tappable"
          >
            <div class="list-item__left">
              <img
                class="list-item__thumbnail"
                src="../src/img/friendIcon.png"
                alt=""
              />
            </div>
            <!-- list-item__left -->

            <div class="list-item__center">
              <div class="text_wrap">
                <div
                  class="username"
                  @click="pushHomeOtheruser"
                >
                  ユーザー名
                </div>
                <i class="fas fa-chevron-right"></i>
              </div>
              <div class="list-item__preText">
                最近TDMをやり始めた。パブジーは前シーズンスタートで、TDMほとんど触れてこなかったけど、楽しいわw。20キルできて喜んでたけれど、みんな20キルって普通なん？
              </div>
            </div>
            <!-- list-item__center -->

            <div class="list-item__right">
              <div class="date">7/01 12:00</div>
              <div class="badge_wrap">
                <div class="badge notification">2</div>
              </div>
            </div>
          </li>
          <!-- list-item -->

          <li
            class="list-item list-item--chevron list-item--tappable"
          >
            <div class="list-item__left">
              <img
                class="list-item__thumbnail"
                src="../src/img/friendIcon.png"
                alt=""
              />
            </div>
            <!-- list-item__left -->

            <div class="list-item__center">
              <div class="text_wrap">
                <div
                  class="username"
                  @click="pushHomeOtheruser"
                >
                  ユーザー名
                </div>
                <i class="fas fa-chevron-right"></i>
              </div>
              <div class="list-item__preText">
                最近TDMをやり始めた。パブジーは前シーズンスタートで、TDMほとんど触れてこなかったけど、楽しいわw。20キルできて喜んでたけれど、みんな20キルって普通なん？
              </div>
            </div>
            <!-- list-item__center -->

            <div class="list-item__right">
              <div class="date">7/01 12:00</div>
              <div class="badge_wrap">
                <div class="badge notification">2</div>
              </div>
            </div>
          </li>
          <!-- list-item -->
        </ul>
      </div>
      <!-- result -->
    </div>
    <!-- content -->
  </v-ons-page>
</template>
<!-- HomeSearchResultUser.html -->



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
