<template>
        <!-- searchArea (これはただのリンク？) -->
        <div class="searchArea">
          <div class="myicon">
            <img src="img/myIcon.png" alt="">
          </div>

              <ons-search-input
                placeholder="キーワードでさがす"
                onchange="ons.notification.alert('Searched for: ' + this.value)" onclick="document.getElementById('myNavigator').pushPage('home_search.html')"></ons-search-input>

          <div class="searchOption">
            <img src="img/iconSearchOption.png" alt="" onclick="document.getElementById('myNavigator').pushPage('home_search_filter.html')">
          </div>
          <div class="news" onclick="document.getElementById('myNavigator').pushPage('home_news.html')">
            <img src="img/IconNews.png" alt="">
          </div>
          <!-- news -->
        </div>
        <!-- searchArea -->
</template>