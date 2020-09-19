<template id="HomeNewsSystem">
  <v-ons-page id="home_news_system">
    <ul class="list">
      <li
        class="list-item list-item--chevron list-item--tappable"
        @click="pushHomeNewsSystemDetail"
      >
        <div class="list-item__center">
          <div class="text_wrap">
            <div class="list-item__preText">
              【定期メンテナンスのお知らせ】<br />
              明日6月11日（木）AM3時から5時までの間、システムメンテンナスを行います。
            </div>
            <div class="time">3分前</div>
          </div>
          <!-- text_wrap -->
        </div>
        <!-- list-item__center -->
      </li>
    </ul>

  </v-ons-page>
</template>
<!-- HomeNewsSystem.html -->




<script>
// import HomeNewsSystemDetail from "HomeNewsSystemDetail";

// export default {
//   methods: {
//     pop() {
//       this.pageStack.pop();
//     },
//     push() {
//       this.pageStack.push(page2);
//     },
//     pushHomeNewsSystemDetail() {
//       this.pageStack.push(HomeNewsSystemDetail);
//     }  },
//   props: ["pageStack"],
//   components: {},
//   key: "key_HomeNewsSystem"
// };
</script>


<style>
@import "./css/reset.css";
@import "./css/theme.css";
@import "./css/style.css";
</style>



