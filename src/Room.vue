  <template>
  <v-ons-page>
    <div id="app">
      <div class="main">
        <!-- スマホ用ヘッダー部 -->
        <div class="dummyheader"></div>
        <v-ons-back-button>マイページ</v-ons-back-button>
        <ons-toolbar class="mypageheader pageBack-icon green">
          <div class="center">フォローリスト</div>
        </ons-toolbar>
        <!-- スマホ用ヘッダー部  end-->
        <div class="mypage-maincontents">
          <div class="gray-back">
            <ul class="list-items">
              <li class="community-list-item">
                <img src class="community-img" />
                <div class="community-details">
                  <p class="community-category">モンスターハンター</p>
                  <p class="community-name">【総合】モンスターハンター：ワールド</p>
                  <div class="community-meta">
                    <span>
                      <i class="fas fa-user"></i>100000
                    </span>
                    <span>
                      <i class="far fa-clock"></i>18:50
                    </span>
                  </div>
                </div>
              </li>
              <li class="community-list-item">
                <img class="community-img" />
                <div class="community-details">
                  <p class="community-category">モンスターハンター</p>
                  <p class="community-name">【総合】モンスターハンター：ワールド</p>
                  <div class="community-meta">
                    <span>
                      <i class="fas fa-user"></i>100000
                    </span>
                    <span>
                      <i class="far fa-clock"></i>18:50
                    </span>
                  </div>
                </div>
              </li>
              <li class="community-list-item">
                <img src class="community-img" />
                <div class="community-details">
                  <p class="community-category">モンスターハンター</p>
                  <p class="community-name">【総合】モンスターハンター：ワールド</p>
                  <div class="community-meta">
                    <span>
                      <i class="fas fa-user"></i>100000
                    </span>
                    <span>
                      <i class="far fa-clock"></i>18:50
                    </span>
                  </div>
                </div>
              </li>
              <li class="community-list-item">
                <img src class="community-img" />
                <div class="community-details">
                  <p class="community-category">モンスターハンター</p>
                  <p class="community-name">【総合】モンスターハンター：ワールド</p>
                  <div class="community-meta">
                    <span>
                      <i class="fas fa-user"></i>100000
                    </span>
                    <span>
                      <i class="far fa-clock"></i>18:50
                    </span>
                  </div>
                </div>
              </li>
              <li class="community-list-item">
                <img src class="community-img" />
                <div class="community-details">
                  <p class="community-category">モンスターハンター</p>
                  <p class="community-name">【総合】モンスターハンター：ワールド</p>
                  <div class="community-meta">
                    <span>
                      <i class="fas fa-user"></i>100000
                    </span>
                    <span>
                      <i class="far fa-clock"></i>18:50
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- /main -->
  </v-ons-page>
</template>

<script>
import app from "./App";

export default {
  methods: {
    pop() {
      this.pageStack.pop();
    }
  },
  props: ["pageStack"],
  components: {},
  key: "key_room"
};
</script>
