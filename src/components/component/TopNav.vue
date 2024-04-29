<template>
  <v-app-bar app dense>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Lotto</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text>회차 정보</v-btn>
    <v-btn text>번호 검색</v-btn>
    <v-btn text>통계 보기</v-btn>
    <v-btn text>번호 추첨</v-btn>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item link>
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" app>
    <v-list>
      <v-list-item link>
        <v-list-item-title>회차 정보</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-title>번호 검색</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-title>통계 보기</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-title>번호 추첨</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  }
};
</script>

<style>
/* 스타일링 추가 가능 */
</style>
