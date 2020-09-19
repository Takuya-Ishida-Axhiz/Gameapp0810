<template id="Home">
  <v-ons-page id="home">
    <!-- <ons-toolbar> </ons-toolbar> -->

    <div class="menu_upper">
      <!-- menu_upper -->

      <!-- search_area -->
      <div class="search_area">
        <div class="myicon">
          <img src="../src/img/myIcon.png" alt />
        </div>

        <div class="search_box">
          <ons-search-input
            placeholder="キーワードでさがす"
            onchange="ons.notification.alert('Searched for: ' + this.value)"
            @click="pushHomeSearch"
          ></ons-search-input>

          <div class="search_option">
            <img src="../src/img/iconSearchOption.png" alt @click="pushHomeSearchFilter" />
          </div>
          <!-- search_option -->
        </div>
        <!-- search_box_wrap -->

        <div class="news" @click="pushHomeNews">
          <img src="../src/img/icon_news.png" alt />
        </div>
        <!-- news -->
      </div>
      <!-- search_area -->

      <!-- ホーム内タブバー -->
      <div class="tab_group">
        <div class="tab is_active">フォロー</div>
        <div class="tab">フレンド</div>
        <div class="tab">ルーム</div>
        <div class="tab">イベント</div>
        <div class="tab">フォロワー</div>
      </div>
      <!-- /ons-tabbar -->
    </div>
    <div class="panel_group">
      <div id="home_follow" class="panel is_show">
        <!-- 投稿追加ボタン -->
        <ons-fab position="bottom right" class="btn_addpost" @click="pushHomeFollowTlPost">
          <i class="fas fa-plus"></i>
        </ons-fab>

        <div class="userlist follow">
          <div class="user online">
            <img
              src="../src/img/followIcon.png"
              alt
              class="user-img"
              @click="pushHomeFollowTlDetail"
            />
          </div>
          <div class="user offline">
            <img
              src="../src/img/followIcon.png"
              alt
              class="user-img"
              @click="pushHomeFollowTlDetail"
            />
          </div>
          <div class="user online">
            <img
              src="../src/img/followIcon.png"
              alt
              class="user-img"
              @click="pushHomeFollowTlDetail"
            />
          </div>
          <div class="user offline">
            <img
              src="../src/img/followIcon.png"
              alt
              class="user-img"
              @click="pushHomeFollowTlDetail"
            />
          </div>
          <div class="user online">
            <img
              src="../src/img/followIcon.png"
              alt
              class="user-img"
              @click="pushHomeFollowTlDetail"
            />
          </div>
          <div class="user offline">
            <img
              src="../src/img/followIcon.png"
              alt
              class="user-img"
              @click="pushHomeFollowTlDetail"
            />
          </div>
          <div class="user offline">
            <img
              src="../src/img/followIcon.png"
              alt
              class="user-img"
              @click="pushHomeFollowTlDetail"
            />
          </div>
          <div class="user offline">
            <img
              src="../src/img/followIcon.png"
              alt
              class="user-img"
              @click="pushHomeFollowTlDetail"
            />
          </div>
        </div>
        <!-- followUserlist -->

        <!-- タイムライン表示 -->
        <div class="timeline follow">
          <div class="ttlbox">
            <div class="ttl">タイムライン</div>
            <div class="sort" tappable modifier="longdivider" @click="pushHomeTlSortFollow">最新順</div>
          </div>
          <!-- ttlbox -->

          <div class="tlcontents follow">
            <div class="item">
              <div class="img_box" @click="pushHomeFollowTlDetail">
                <img src="../src/img/tlImg.png" alt />
              </div>
              <!-- img_box -->

              <div class="txt_box" @click="pushHomeFollowTlDetail">僕は蠱毒使いにはスタミナ系と攻撃系の旋律を優先…</div>
              <!-- txt_box -->

              <div class="user_box">
                <div class="icon" @click="pushHomeOtheruser">
                  <img src="../src/img/tlUser.png" alt />
                </div>
                <!-- icon -->
                <div class="name" @click="pushHomeOtheruser">ふぇぐ</div>
                <!-- name -->
                <div class="nice">
                  <i class="fas fa-heart"></i>
                </div>
                <!-- nice -->

                <div class="retweet" @click="pushHomeFollowTlRetweet">
                  <i class="fas fa-retweet"></i>
                </div>
                <!-- retweet -->
              </div>
              <!-- user_box -->
            </div>
            <!-- item -->

            <div class="item">
              <div class="img_box" @click="pushHomeFollowTlDetail">
                <img src="../src/img/tlImg.png" alt />
              </div>
              <!-- img_box -->

              <div class="txt_box" @click="pushHomeFollowTlDetail">僕は蠱毒使いにはスタミナ系と攻撃系の旋律を優先…</div>
              <!-- txt_box -->

              <div class="user_box">
                <div class="icon" @click="pushPageHomeOtheruser">
                  <img src="../src/img/tlUser.png" alt />
                </div>
                <!-- icon -->
                <div class="name" @click="pushHomeOtheruser">ふぇぐ</div>
                <!-- name -->
                <div class="nice">
                  <i class="fas fa-heart"></i>
                </div>
                <!-- nice -->

                <div class="retweet" @click="pushHomeFollowTlRetweet">
                  <i class="fas fa-retweet"></i>
                </div>
                <!-- retweet -->
              </div>
              <!-- user_box -->
            </div>
            <!-- item -->

            <div class="item">
              <div class="img_box" @click="dpushHomeFollowTlDetail">
                <img src="../src/img/tlImg.png" alt />
              </div>
              <!-- img_box -->

              <div class="txt_box" @click="pushHomeFollowTlDetail">僕は蠱毒使いにはスタミナ系と攻撃系の旋律を優先…</div>
              <!-- txt_box -->

              <div class="user_box">
                <div class="icon" @click="pushHomeOtheruser">
                  <img src="../src/img/tlUser.png" alt />
                </div>
                <!-- icon -->
                <div class="name" @click="pushHomeOtheruser">ふぇぐ</div>
                <!-- name -->
                <div class="nice">
                  <i class="fas fa-heart"></i>
                </div>
                <!-- nice -->

                <div class="retweet" @click="pushHomeFollowTlRetweet">
                  <i class="fas fa-retweet"></i>
                </div>
                <!-- retweet -->
              </div>
              <!-- user_box -->
            </div>
            <!-- item -->

            <div class="item">
              <div class="img_box" @click="pushHomeFollowTlDetail">
                <img src="../src/img/tlImg.png" alt />
              </div>
              <!-- img_box -->

              <div class="txt_box" @click="pushHomeFollowTlDetail">僕は蠱毒使いにはスタミナ系と攻撃系の旋律を優先…</div>
              <!-- txt_box -->

              <div class="user_box">
                <div class="icon" @click="pushHomeOtheruser">
                  <img src="../src/img/tlUser.png" alt />
                </div>
                <!-- icon -->
                <div class="name" @click="pushHomeOtheruser">ふぇぐ</div>
                <!-- name -->
                <div class="nice">
                  <i class="fas fa-heart"></i>
                </div>
                <!-- nice -->

                <div class="retweet" @click="pushHomeFollowTlRetweet">
                  <i class="fas fa-retweet"></i>
                </div>
                <!-- retweet -->
              </div>
              <!-- user_box -->
            </div>
            <!-- item -->
          </div>
          <!-- contents -->
        </div>
        <!-- timeline -->
      </div>
      <div id="home_friend" class="panel">
        <div class="userlist friend">
          <div class="user online" @click="pushHomeOtheruser">
            <img src="../src/img/friendIcon.png" alt class="user-img" />
          </div>
          <div class="user offline" @click="pushHomeOtheruser">
            <img src="../src/img/friendIcon.png" alt />
          </div>
          <div class="user online" @click="pushHomeOtheruser">
            <img src="../src/img/friendIcon.png" alt class="user-img" />
          </div>
          <div class="user offline" @click="pushHomeOtheruser">
            <img src="../src/img/friendIcon.png" alt />
          </div>
          <div class="user offline" @click="pushHomeOtheruser">
            <img src="../src/img/friendIcon.png" alt />
          </div>
          <div class="user offline" @click="pushHomeOtheruser">
            <img src="../src/img/friendIcon.png" alt />
          </div>
          <div class="user offline" @click="pushHomeOtheruser">
            <img src="../src/img/friendIcon.png" alt />
          </div>
          <div class="user offline" @click="pushHomeOtheruser">
            <img src="../src/img/friendIcon.png" alt />
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
            >最新順</div>
          </div>

          <div class="tlcontents friend">
            <ul class="list">
              <li class="list-item list-item--chevron list-item--tappable">
                <div class="list-item__left">
                  <img class="list-item__thumbnail" src="../src/img/friendIcon.png" alt />
                </div>
                <!-- list-item__left -->

                <div class="list-item__center">
                  <div class="text_wrap">
                    <div class="username" @click="pushHomeOtheruser">ユーザー名</div>
                    <i class="fas fa-chevron-right"></i>
                  </div>
                  <div
                    class="list-item__preText"
                  >最近TDMをやり始めた。パブジーは前シーズンスタートで、TDMほとんど触れてこなかったけど、楽しいわw。20キルできて喜んでたけれど、みんな20キルって普通なん？</div>
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

              <li class="list-item list-item--chevron list-item--tappable">
                <div class="list-item__left">
                  <img class="list-item__thumbnail" src="../src/img/friendIcon.png" alt />
                </div>
                <!-- list-item__left -->

                <div class="list-item__center">
                  <div class="text_wrap">
                    <div class="username" @click="pushHomeOtheruser">ユーザー名</div>
                    <i class="fas fa-chevron-right"></i>
                  </div>
                  <div
                    class="list-item__preText"
                  >最近TDMをやり始めた。パブジーは前シーズンスタートで、TDMほとんど触れてこなかったけど、楽しいわw。20キルできて喜んでたけれど、みんな20キルって普通なん？</div>
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
      </div>
      <div id="home_room" class="panel">
        <!-- <ons-toolbar>
          <div class="center">ルーム　タブバー</div>
        </ons-toolbar>-->

        <div class="userlist room">
          <img src="../src/img/home_room_item.png" alt />
          <img src="../src/img/home_room_item.png" alt />
          <img src="../src/img/home_room_item.png" alt />
          <img src="../src/img/home_room_item.png" alt />
          <img src="../src/img/home_room_item.png" alt />
          <img src="../src/img/home_room_item.png" alt />
          <img src="../src/img/home_room_item.png" alt />
          <img src="../src/img/home_room_item.png" alt />
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
            >-->
            <div class="sort" tappable modifier="longdivider">最新順</div>
          </div>
          <!-- ttlbox -->

          <div class="tlcontents room">
            <ul class="list">
              <li class="list-item list-item--chevron list-item--tappable">
                <div class="list-item__left">
                  <img class="list-item__thumbnail" src="../src/img/home_room_item.png" alt />
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
                  <div class="roomname">【総合】モンスターハンター：ワール</div>
                  <div class="info_wrap">
                    <div class="member_wrap">
                      <div class="icon">
                        <i class="fas fa-user"></i>
                      </div>
                      <div class="number">121282</div>
                    </div>
                    <!-- member_wrap -->
                    <div class="time_wrap">
                      <div class="icon">
                        <i class="far fa-clock"></i>
                      </div>
                      <div class="time">10分前</div>
                    </div>
                    <!-- time_wrap -->
                  </div>
                  <!-- list-item__info_wrap -->
                </div>
                <!-- list-item__center -->
              </li>
              <!-- list-item -->

              <li class="list-item list-item--chevron list-item--tappable">
                <div class="list-item__left">
                  <img class="list-item__thumbnail" src="../src/img/home_room_item.png" alt />
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
                  <div class="roomname">【総合】モンスターハンター：ワール</div>
                  <div class="info_wrap">
                    <div class="member_wrap">
                      <div class="icon">
                        <i class="fas fa-user"></i>
                      </div>
                      <div class="number">121282</div>
                    </div>
                    <!-- member_wrap -->
                    <div class="time_wrap">
                      <div class="icon">
                        <i class="far fa-clock"></i>
                      </div>
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
      </div>
      <div id="home_event" class="panel">
        <!-- <ons-toolbar>
          <div class="center">イベント　タブバー</div>
        </ons-toolbar>-->

        <div class="userlist room">
          <img src="../src/img/home_event_item.png" alt />
          <img src="../src/img/home_event_item.png" alt />
          <img src="../src/img/home_event_item.png" alt />
          <img src="../src/img/home_event_item.png" alt />
          <img src="../src/img/home_event_item.png" alt />
          <img src="../src/img/home_event_item.png" alt />
          <img src="../src/img/home_event_item.png" alt />
          <img src="../src/img/home_event_item.png" alt />
          <img src="../src/img/home_event_item.png" alt />
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
            >-->
            <div class="sort" 　tappable modifier="longdivider">最新順</div>
          </div>
          <!-- ttlbox -->

          <div class="tlcontents event">
            <ul class="list">
              <li class="list-item list-item--chevron list-item--tappable">
                <div class="list-item__left">
                  <img class="list-item__thumbnail" src="../src/img/home_event_item.png" alt />
                </div>
                <!-- list-item__left -->

                <div class="list-item__center">
                  <div class="eventname">ロケットリーグ</div>
                  <div class="prev_text">イベント内容イベント内容イベント内容</div>

                  <div class="user_wrap">
                    <div class="icon">
                      <img src="../src/img/home_event_user.png" alt />
                    </div>
                    <div class="name">remisora</div>
                  </div>
                  <!-- member_wrap -->
                </div>
                <!-- list-item__center -->
              </li>
              <!-- list-item -->

              <li class="list-item list-item--chevron list-item--tappable">
                <div class="list-item__left">
                  <img class="list-item__thumbnail" src="../src/img/home_event_item.png" alt />
                </div>
                <!-- list-item__left -->

                <div class="list-item__center">
                  <div class="eventname">ロケットリーグ</div>
                  <div class="prev_text">イベント内容イベント内容イベント内容</div>

                  <div class="user_wrap">
                    <div class="icon">
                      <img src="../src/img/home_event_user.png" alt />
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
      </div>
      <div id="home_follower" class="panel">
        <!-- <ons-toolbar>
          <div class="center">フォロワー　タブバー</div>
        </ons-toolbar>-->

        <div class="userlist follower">
          <div class="user online" @click="pushHomeOtheruser">
            <img src="../src/img/home_event_user.png" alt class="user-img" />
          </div>
          <div class="user offline" @click="pushHomeOtheruser">
            <img src="../src/img/home_event_user.png" alt />
          </div>
          <div class="user online" @click="pushHomeOtheruser">
            <img src="../src/img/home_event_user.png" alt class="user-img" />
          </div>
          <div class="user offline" @click="pushHomeOtheruser">
            <img src="../src/img/home_event_user.png" alt />
          </div>
          <div class="user offline" @click="pushHomeOtheruser">
            <img src="../src/img/home_event_user.png" alt />
          </div>
          <div class="user offline" @click="pushHomeOtheruser">
            <img src="../src/img/home_event_user.png" alt />
          </div>
          <div class="user offline" @click="pushHomeOtheruser">
            <img src="../src/img/home_event_user.png" alt />
          </div>
          <div class="user offline" @click="pushHomeOtheruser">
            <img src="../src/img/home_event_user.png" alt />
          </div>
        </div>
        <!-- followerlist -->

        <!-- タイムライン表示 -->
        <div class="timeline follower">
          <div class="ttlbox">
            <div class="ttl">タイムライン</div>
            <!-- <div
              class="sort"
              tappable
              modifier="longdivider"
              onclick="ons.openActionSheet({ buttons: ['最新順', 'いいね順', '超いいね順', 'フォロワー順', 'Cancel'], cancelable: true })"
            >-->
            <div class="sort" 　tappable modifier="longdivider">最新順</div>
          </div>
          <!-- ttlbox -->

          <div class="tlcontents follower">
            <ul class="list">
              <li class="list-item list-item--chevron list-item--tappable">
                <div class="list-item__center">
                  <div class="user_wrap">
                    <div class="icon">
                      <img src="../src/img/home_event_user.png" alt />
                    </div>
                    <div class="name-time_wrap">
                      <div class="name_wrap">
                        <div class="name">remisora</div>
                        <i class="fas fa-chevron-right"></i>
                      </div>
                      <div class="time">10分前</div>
                    </div>
                  </div>
                  <!-- user_wrap -->

                  <div class="prev_text">
                    もっと上がるけど、組んでないので分からないですが、どんな装備でしょう(･ω･三･ω･)ﾌﾝﾌﾝ
                    ちなみに狩猟笛は攻撃特大のみ発動中です
                  </div>

                  <div class="icon_area">
                    <div class="item img row">
                      <img src="../src/img/icon_super_nice_inactive.png" alt />
                      <div class="count">10</div>
                    </div>
                    <div class="item font nice row">
                      <i class="fas fa-heart"></i>
                      <div class="count">15</div>
                    </div>
                    <div class="item font">
                      <i class="fas fa-bookmark"></i>
                    </div>
                    <div class="item font retweet">
                      <i class="fas fa-retweet"></i>
                    </div>
                    <div class="item font share">
                      <i class="fas fa-share"></i>
                    </div>
                  </div>
                  <!-- icon-ara -->
                </div>
                <!-- list-item__center -->
              </li>
              <!-- list-item -->

              <li class="list-item list-item--chevron list-item--tappable">
                <div class="list-item__center">
                  <div class="user_wrap">
                    <div class="icon">
                      <img src="../src/img/home_event_user.png" alt />
                    </div>
                    <div class="name-time_wrap">
                      <div class="name_wrap">
                        <div class="name">remisora</div>
                        <i class="fas fa-chevron-right"></i>
                      </div>
                      <div class="time">10分前</div>
                    </div>
                  </div>
                  <!-- user_wrap -->

                  <div class="prev_text">
                    もっと上がるけど、組んでないので分からないですが、どんな装備でしょう(･ω･三･ω･)ﾌﾝﾌﾝ
                    ちなみに狩猟笛は攻撃特大のみ発動中です
                  </div>

                  <div class="icon_area">
                    <div class="item img row">
                      <img src="../src/img/icon_super_nice_inactive.png" alt />
                      <div class="count">10</div>
                    </div>
                    <div class="item font nice row">
                      <i class="fas fa-heart"></i>
                      <div class="count">15</div>
                    </div>
                    <div class="item font bookmark">
                      <i class="fas fa-bookmark"></i>
                    </div>
                    <div class="item font retweet">
                      <i class="fas fa-retweet"></i>
                    </div>
                    <div class="item font share">
                      <i class="fas fa-share"></i>
                    </div>
                  </div>
                </div>
                <!-- list-item__center -->
              </li>
              <!-- list-item -->
            </ul>
            <!-- list -->
          </div>
          <!-- tlcontents -->
        </div>
        <!-- timeline -->
      </div>
      <!-- menu_upper -->
    </div>
  </v-ons-page>
  <!-- tab1 -->
</template>
<!-- Home.html -->

<script>
import HomeFollow from "HomeFollow";
import HomeSearch from "HomeSearch";
import HomeSearchFilter from "HomeSearchFilter";
import HomeNews from "HomeNews";

export default {
  methods: {
    pop() {
      this.pageStack.pop();
    },
    pushHomeSearch() {
      this.pageStack.push(HomeSearch);
    },
    pushHomeSearchFilter() {
      this.pageStack.push(HomeSearchFilter);
    },
    pushHomeNews() {
      this.pageStack.push(HomeNews);
    }
  },
  props: ["pageStack"],
  components: {},
  key: "key_Home"
};

document.addEventListener("DOMContentLoaded", function() {
  // タブに対してクリックイベントを適用
  const tabs = document.getElementsByClassName("tab");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", tabSwitch);
  }

  // タブをクリックすると実行する関数
  function tabSwitch() {
    // タブのclassの値を変更
    document
      .getElementsByClassName("is_active")[0]
      .classList.remove("is_active");
    this.classList.add("is_active");
    // コンテンツのclassの値を変更
    document.getElementsByClassName("is_show")[0].classList.remove("is_show");
    const arrayTabs = Array.prototype.slice.call(tabs);
    const index = arrayTabs.indexOf(this);
    document.getElementsByClassName("panel")[index].classList.add("is_show");
  }
});
</script>

<style>
@import "./css/reset.css";
@import "./css/theme.css";
@import "./css/style.css";

.tab_group {
  display: flex;
  justify-content: center;
}
.tab {
  flex-grow: 1;
  padding: 5px;
  list-style: none;
  border: solid 1px #ccc;
  text-align: center;
  cursor: pointer;
}
.panel_group {
  height: 100px;
  border: solid 1px #ccc;
  border-top: none;
  background: #eee;
  margin-top: 10rem;
}
.panel {
  display: none;
}
.tab.is_active {
  background: #f00;
  color: #fff;
  transition: all 0.2s ease-out;
}
.panel.is_show {
  display: block;
}
.menu_upper {
  height: fit-content;
  position: fixed;
}
.search_area {
  position: relative;
}
</style>
