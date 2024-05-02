<template>
    <v-container>
      <!-- 표 제목 -->
      <v-row>
        <v-col>
            <h1 class="title">회차 정보</h1>
        </v-col>
      </v-row>
      <!-- 로또 정보 행 반복 -->
      <v-row
        v-for="n in 10"
        :key="n"
        class="info-row"
      >
        <v-col>
          <v-sheet class="sheet-padding">
            <div class="info-text">
              &lt;1117회차 로또 정보&gt;
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </template>

<script>
export default {
  name: 'RoundInfo'
}
</script>

<style scoped>
.container {
  border: 2px solid #ccc; /* 전체 컨테이너에 테두리 추가 */
  padding: 20px; /* 내부 여백 */
}

.title {
  text-align: center; /* 제목을 중앙 정렬 */
  font-weight: bold; /* 제목을 볼드체로 */
  font-size: 32px; /* 제목의 글씨 크기 */
}

.info-row {
  margin-top: 10px;
}

.info-text {
  font-weight: bold; /* 텍스트 볼드체 */
  font-size: 20px; /* 텍스트 글씨 크기 */
}

.sheet-padding {
  padding: 10px; /* v-sheet 내부 여백 */
  border: 1px solid #ccc; /* v-sheet 테두리 */
}
</style>
