    <template id="HomeEvent.html">
      <v-ons-page id="home_event">
        <!-- <ons-toolbar>
          <div class="center">イベント　タブバー</div>
        </ons-toolbar> -->

        <div class="tabbarArea"></div>
        <div class="userlist room">
          <img src="../src/img/home_event_item.png" alt="" />
          <img src="../src/img/home_event_item.png" alt="" />
          <img src="../src/img/home_event_item.png" alt="" />
          <img src="../src/img/home_event_item.png" alt="" />
          <img src="../src/img/home_event_item.png" alt="" />
          <img src="../src/img/home_event_item.png" alt="" />
          <img src="../src/img/home_event_item.png" alt="" />
          <img src="../src/img/home_event_item.png" alt="" />
          <img src="../src/img/home_event_item.png" alt="" />
        </div>
        <!-- followUserlist -->

        <!-- タイムライン表示 -->
        <div class="timeline event">
          <div class="ttlbox">
            <div class="ttl">タイムライン</div>
            <!-- <div
              class="sort"
              　tappable
              modifier="longdivider"
              onclick="ons.openActionSheet({ buttons: ['最新順', 'おすすめ順', 'ランキング順', 'マッチング回数順', 'Cancel'], cancelable: true })"
            > -->
            <div
              class="sort"
              　tappable
              modifier="longdivider"
            >
              最新順
            </div>
          </div>
          <!-- ttlbox -->

          <div class="tlcontents event">
            <ul class="list">
              <li
                class="list-item list-item--chevron list-item--tappable"
              >
                <div class="list-item__left">
                  <img
                    class="list-item__thumbnail"
                    src="../src/img/home_event_item.png"
                    alt=""
                  />
                </div>
                <!-- list-item__left -->

                <div class="list-item__center">
                  <div class="eventname">ロケットリーグ</div>
                  <div class="prev_text">
                    イベント内容イベント内容イベント内容
                  </div>

                  <div class="user_wrap">
                    <div class="icon">
                      <img src="../src/img/home_event_user.png" alt="" />
                    </div>
                    <div class="name">remisora</div>
                  </div>
                  <!-- member_wrap -->
                </div>
                <!-- list-item__center -->
              </li>
              <!-- list-item -->

              <li
                class="list-item list-item--chevron list-item--tappable"
              >
                <div class="list-item__left">
                  <img
                    class="list-item__thumbnail"
                    src="../src/img/home_event_item.png"
                    alt=""
                  />
                </div>
                <!-- list-item__left -->

                <div class="list-item__center">
                  <div class="eventname">ロケットリーグ</div>
                  <div class="prev_text">
                    イベント内容イベント内容イベント内容
                  </div>

                  <div class="user_wrap">
                    <div class="icon">
                      <img src="../src/img/home_event_user.png" alt="" />
                    </div>
                    <div class="name">remisora</div>
                  </div>
                  <!-- member_wrap -->
                </div>
                <!-- list-item__center -->
              </li>
              <!-- list-item -->
            </ul>
          </div>
          <!-- tlcontents -->
        </div>
        <!-- timeline -->
      </v-ons-page>
    </template>
    <!-- HomeEvent.html -->

<script>
// import pushHomeOtheruser from "HomeOtheruser";

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
//   key: "key_HomeEvent"
// };
</script>


<style>
@import "./css/reset.css";
@import "./css/theme.css";
@import "./css/style.css";
</style>

