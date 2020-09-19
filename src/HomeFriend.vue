    <template id="HomeFriend">
      <v-ons-page id="home_friend">
        <div class="tabbarArea"></div>
        <div class="userlist friend">
          <div
            class="user online"
            @click="pushHomeOtheruser"
          >
            <img src="../src/img/friendIcon.png" alt="" class="user-img" />
          </div>
          <div
            class="user offline"
            @click="pushHomeOtheruser"
          >
            <img src="../src/img/friendIcon.png" alt="" />
          </div>
          <div
            class="user online"
            @click="pushHomeOtheruser"
          >
            <img src="../src/img/friendIcon.png" alt="" class="user-img" />
          </div>
          <div
            class="user offline"
            @click="pushHomeOtheruser"
          >
            <img src="../src/img/friendIcon.png" alt="" />
          </div>
          <div
            class="user offline"
            @click="pushHomeOtheruser"
          >
            <img src="../src/img/friendIcon.png" alt="" />
          </div>
          <div
            class="user offline"
            @click="pushHomeOtheruser"
          >
            <img src="../src/img/friendIcon.png" alt="" />
          </div>
          <div
            class="user offline"
            @click="pushHomeOtheruser"
          >
            <img src="../src/img/friendIcon.png" alt="" />
          </div>
          <div
            class="user offline"
            @click="pushHomeOtheruser"
          >
            <img src="../src/img/friendIcon.png" alt="" />
          </div>
        </div>
        <!-- friendlist -->

        <!-- タイムライン表示 -->
        <div class="timeline friend">
          <div class="ttlbox">
            <div class="ttl">タイムライン</div>
            <div
              class="sort"
              　tappable
              modifier="longdivider"
              onclick="ons.openActionSheet({ buttons: ['最新順', 'いいね順', '超いいね順', 'フォロワー順', 'Cancel'], cancelable: true })"
            >
              最新順
            </div>
          </div>

          <div class="tlcontents friend">
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
          <!-- tlcontents -->
        </div>
        <!-- timeline -->
      </v-ons-page>
    </template>
    <!-- HomeFriend.html -->


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
//   key: "key_HomeFriend"
// };
</script>


<style>
@import "./css/reset.css";
@import "./css/theme.css";
@import "./css/style.css";
</style>

