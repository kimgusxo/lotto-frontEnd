<template>
  <v-sheet>
    <v-row justify="center">
      <!-- 기존 원 반복 생성, 각 원에 고유 클래스 추가 -->
      <v-col cols="auto" v-for="(n, index) in 6" :key="n">
        <div class="number-label">번호</div>
        <v-avatar :class="`color-${index + 1}`" size="70px">
          <span class="white--text headline font-weight-bold">{{ n }}</span>
        </v-avatar>
      </v-col>
      <!-- 추가 기호 '+' -->
      <v-col cols="auto" class="d-flex align-center justify-center plus-symbol">
        +
      </v-col>
      <!-- 추가 원 -->
      <v-col cols="auto">
        <div class="number-label">보너스 번호</div>
        <v-avatar class="color-bonus" size="70px">
          <span class="white--text headline font-weight-bold">7</span> <!-- 예시 숫자 -->
        </v-avatar>
      </v-col>
    </v-row>
  </v-sheet>
  </template>
  
  <script>
  export default {
    name: 'Number'
  }
  </script>
  
  <style scoped>
  .number-label {
    font-size: 16px;
    color: #757575;
    text-align: center;
    margin-bottom: 8px;
  }
  
  .plus-symbol {
    font-size: 50px;
    margin: 0 20px;
  }
  
  .v-avatar {
    border: 3px solid transparent; /* 기본 테두리 설정 */
  }
  
  /* 각 원에 대한 색상 및 테두리 스타일 */
  .color-1 { background-color: rgba(255, 0, 0, 0.3); border-color: red; }
  .color-2 { background-color: rgba(0, 255, 0, 0.3); border-color: green; }
  .color-3 { background-color: rgba(0, 0, 255, 0.3); border-color: blue; }
  .color-4 { background-color: rgba(255, 255, 0, 0.3); border-color: yellow; }
  .color-5 { background-color: rgba(0, 255, 255, 0.3); border-color: cyan; }
  .color-6 { background-color: rgba(255, 0, 255, 0.3); border-color: magenta; }
  .color-bonus { background-color: rgba(255, 165, 0, 0.3); border-color: orange; }
  
  .v-avatar .white--text {
    font-size: 40px;
    font-weight: bold;
  }

  /* v-sheet에 패딩 추가 */
.v-sheet {
  padding-top: 30px; /* 상단 패딩 */
  padding-bottom: 30px; /* 하단 패딩 */
  margin: 10px;
}
  </style>
  