<template>
  <v-app-bar app dense>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <!-- 툴바 타이틀을 굵게 -->
    <v-toolbar-title class="font-bold">Lotto</v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- 텍스트 버튼에 대해서도 굵은 폰트 적용 -->
    <v-btn text class="font-bold">회차 정보</v-btn>
    <v-btn text class="font-bold">번호 검색</v-btn>
    <v-btn text class="font-bold">통계 보기</v-btn>
    <v-btn text class="font-bold">번호 추첨</v-btn>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" app>
    <v-list>
      <!-- 네비게이션 드로어 아이템에도 굵은 폰트 적용 -->
      <v-list-item link>
        <v-list-item-title class="font-bold">회차 정보</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-title class="font-bold">번호 검색</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-title class="font-bold">통계 보기</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-title class="font-bold">번호 추첨</v-list-item-title>
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

<style scoped>
.font-bold {
  font-weight: bold; /* 모든 bold 클래스에 굵은 폰트 스타일 적용 */
  font-size: 16px;
}
</style>
