<template>
    <!-- <div class="menu_lower">
      <ons-tabbar swipeable position="auto">
        <ons-tab  label="ホーム" icon="fa-home" badge=" " active></ons-tab>
        <ons-tab  label="ルーム" icon="fa-campground" badge=" "></ons-tab>
        <ons-tab  label="トーク" icon="fa-comments" badge=" "></ons-tab>
        <ons-tab  label="マイページ" icon="fa-user"></ons-tab>
      </ons-tabbar>
    </div> -->


    <div>
      <button ><router-link to = '/'>ホーム</router-link></button>
      <button><router-link to = '/chat'>チャット</router-link></button>
      <button><router-link to = '/'>ルーム</router-link></button>
      <button><router-link to = '/Mypage'>マイページ</router-link></button>
    </div>
</template>


<style>
  /* .menu_lower{
    position:static;
    z-index:10;
  } */
</style>



  