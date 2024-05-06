<template>
  <v-app-bar app dense>
    <router-link to="/" class="lotto-link">
      <v-toolbar-title class="font-bold lotto-title">Lotto</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <!-- 라우트 경로를 to 속성을 통해 지정 -->
    <v-btn text class="font-bold" to="/round">회차 정보</v-btn>
    <v-btn text class="font-bold" to="/number">번호 정보</v-btn>
    <v-btn text class="font-bold" to="/calendar">캘린더</v-btn>
    <v-btn text class="font-bold" to="/statistics">통계 보기</v-btn>
    <v-btn text class="font-bold" to="/draw">번호 추첨</v-btn>
  </v-app-bar>
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
  font-weight: bold;
  font-size: 16px;
}

.lotto-title {
  font-size: 32px; /* Lotto 타이틀의 폰트 크기를 24px로 설정 */
}

.lotto-link {
  text-decoration: none; /* 링크 기본 스타일 제거 */
  color: inherit; /* 부모 요소로부터 색상 상속 */
  padding-left: 20px; /* 왼쪽에 20px의 패딩 추가 */
}
</style>
