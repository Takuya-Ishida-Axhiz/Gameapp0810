    <template id="HomeRoom.html">
      <v-ons-page id="home_room">
        <!-- <ons-toolbar>
          <div class="center">ルーム　タブバー</div>
        </ons-toolbar> -->

        <div class="tabbarArea"></div>
        <div class="userlist room">
          <img src="../src/img/home_room_item.png" alt="" />
          <img src="../src/img/home_room_item.png" alt="" />
          <img src="../src/img/home_room_item.png" alt="" />
          <img src="../src/img/home_room_item.png" alt="" />
          <img src="../src/img/home_room_item.png" alt="" />
          <img src="../src/img/home_room_item.png" alt="" />
          <img src="../src/img/home_room_item.png" alt="" />
          <img src="../src/img/home_room_item.png" alt="" />
        </div>
        <!-- room userlist -->

        <!-- タイムライン表示 -->
        <div class="timeline room">
          <div class="ttlbox">
            <div class="ttl">タイムライン</div>
            <!-- <div
              class="sort"
              tappable
              modifier="longdivider"
              @click="pushHomeOtheruser"
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

          <div class="tlcontents room">
            <ul class="list">
              <li
                class="list-item list-item--chevron list-item--tappable"
              >
                <div class="list-item__left">
                  <img
                    class="list-item__thumbnail"
                    src="../src/img/home_room_item.png"
                    alt=""
                  />
                </div>
                <!-- list-item__left -->

                <div class="list-item__center">
                  <div class="gametitle_wrap">
                    <div class="gametitle">モンスターハンター</div>
                    <div>
                      <i class="fas fa-chevron-right"></i>
                    </div>
                  </div>
                  <!-- gametitle_wrap -->
                  <div class="roomname">
                    【総合】モンスターハンター：ワール
                  </div>
                  <div class="info_wrap">
                    <div class="member_wrap">
                      <div class="icon">
                        <i class="fas fa-user"></i>
                      </div>
                      <div class="number">121282</div>
                    </div>
                    <!-- member_wrap -->
                    <div class="time_wrap">
                      <div class="icon"><i class="far fa-clock"></i></div>
                      <div class="time">10分前</div>
                    </div>
                    <!-- time_wrap -->
                  </div>
                  <!-- list-item__info_wrap -->
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
                    src="../src/img/home_room_item.png"
                    alt=""
                  />
                </div>
                <!-- list-item__left -->

                <div class="list-item__center">
                  <div class="gametitle_wrap">
                    <div class="gametitle">モンスターハンター</div>
                    <div>
                      <i class="fas fa-chevron-right"></i>
                    </div>
                  </div>
                  <!-- gametitle_wrap -->
                  <div class="roomname">
                    【総合】モンスターハンター：ワール
                  </div>
                  <div class="info_wrap">
                    <div class="member_wrap">
                      <div class="icon">
                        <i class="fas fa-user"></i>
                      </div>
                      <div class="number">121282</div>
                    </div>
                    <!-- member_wrap -->
                    <div class="time_wrap">
                      <div class="icon"><i class="far fa-clock"></i></div>
                      <div class="time">10分前</div>
                    </div>
                    <!-- time_wrap -->
                  </div>
                  <!-- list-item__info_wrap -->
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
    <!-- HomeRoom.html -->


<script>
  // import pushHomeOtheruser from "HomeOtheruser";

  //  export default {
  //   methods: {
  //     pop() {
  //       this.pageStack.pop();
  //     },
  //     push() {
  //     this.pageStack.push(page2);
  //     },
  //     props: ["pageStack"],
  //     components: {},
  //     key: "key_HomeRoom"
  // };
</script>


<style>
@import "./css/reset.css";
@import "./css/theme.css";
@import "./css/style.css";
</style>

