  <template>
  <v-ons-page>
    <div id="app">
      <div class="main">
        <!-- スマホ用ヘッダー部 -->
        <div class="dummyheader"></div>
        <ons-toolbar class="mypageheader pageBack-icon green">
          <!-- <div class="left">
          <ons-icon icon="far-times-circle"></ons-icon>
          </div>-->
          <div class="center">アプリ情報・利用規約</div>
        </ons-toolbar>
        <!-- スマホ用ヘッダー部  end-->
        <v-ons-back-button>マイページ</v-ons-back-button>
        <div class="mypage-maincontents">
          <div class="gray-back">
            <ul class="list">
              <li class="list-item list-item--chevron">
                <div @click="pushterm" class="list-item__center">利用規約</div>
              </li>
              <li class="list-item list-item--chevron">
                <div @click="pushpolicy" class="list-item__center">プライバシーポリシー</div>
              </li>
            </ul>
            <ul class="list">
              <li class="list-item">
                <div class="list-item__center">バージョン</div>
                <div class="list-item__right">
                  <div class="list-item__label">1.00.0</div>
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
import Term from "Term";
import Policy from "Policy";

export default {
  methods: {
    pop() {
      this.pageStack.pop();
    },
    pushterm() {
      this.pageStack.push(Term);
    },
    pushpolicy() {
      this.pageStack.push(Policy);
    }
  },
  props: ["pageStack"],
  components: {},
  key: "key_appinfo"
};
</script>
