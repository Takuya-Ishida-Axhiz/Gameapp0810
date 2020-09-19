<template>
  <v-ons-page>
    <div id="app">
      <v-ons-navigator :page-stack="pageStack">
        <component :is="page" v-for="page in pageStack" :key="page.key" :page-stack="pageStack"></component>
      </v-ons-navigator>
    </div>
  </v-ons-page>
</template>

<script>
import Home from "Home";

export default {
  data() {
    return {
      pageStack: [Home]
    };
  }
};
</script>
