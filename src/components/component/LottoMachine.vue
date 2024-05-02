<template>
  <v-container class="container">
    <v-title class="title">
      번호 추첨
    </v-title>
    <div class="rounded-rectangle">
      ?
    </div>
    <!-- 버튼 그룹 추가 -->
    <div class="button-group">
      <v-btn @click="drawNumbers(1)" class="draw-btn light-blue">1회 추첨</v-btn>
      <v-btn @click="drawNumbers(5)" class="draw-btn light-green">5회 추첨</v-btn>
      <v-btn @click="drawNumbers(10)" class="draw-btn pink">10회 추첨</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'QuestionBox',
  methods: {
    drawNumbers(count) {
      // 추첨 로직 추가
      console.log(`${count}회의 번호를 추첨합니다.`);
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 화면의 높이만큼 컨테이너를 확장합니다. */
}

.title {
  font-size: 36px;
  font-weight: bold;
}

.rounded-rectangle {
  width: 500px;
  height: 500px;
  border: 4px solid;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 300px;
  color: #ffffff; /* 텍스트 색상을 흰색으로 설정 */
  animation: colorChange 5s infinite;
}

.button-group {
  margin-top: 20px;
  display: flex;
  gap: 20px;
}

.draw-btn {
  font-size: 24px;
  border-radius: 10px; /* 버튼의 모서리를 둥글게 */
  color: #ffffff; /* 버튼 텍스트 색상을 흰색으로 설정 */
  font-weight: bold; /* 버튼 텍스트를 굵게 설정 */
  line-height: 1; /* 텍스트를 버튼의 중앙에 정렬합니다. */
  width: 200px;
  height: 60px;
}

.light-blue {
  background-color: rgba(0, 191, 255, 0.3); /* 라이트 블루 배경색 및 투명도 설정 */
  border: 2px solid #87CEEB; /* 테두리 색상을 라이트 블루로 설정 */
}

.light-green {
  background-color: rgba(144, 238, 144, 0.3); /* 라이트 그린 배경색 및 투명도 설정 */
  border: 2px solid #90EE90; /* 테두리 색상을 라이트 그린으로 설정 */
}

.pink {
  background-color: rgba(255, 192, 203, 0.3); /* 핑크 배경색 및 투명도 설정 */
  border: 2px solid #FFC0CB; /* 테두리 색상을 핑크로 설정 */
}

@keyframes colorChange {
  0%, 100% {
      background-color: rgba(255, 0, 0, 0.3);
      border-color: red;
  }
  14.28571% {
      background-color: rgba(0, 255, 0, 0.3);
      border-color: green;
  }
  28.57143% {
      background-color: rgba(0, 0, 255, 0.3);
      border-color: blue;
  }
  42.85714% {
      background-color: rgba(255, 255, 0, 0.3);
      border-color: yellow;
  }
  57.14286% {
      background-color: rgba(0, 255, 255, 0.3);
      border-color: cyan;
  }
  71.42857% {
      background-color: rgba(255, 0, 255, 0.3);
      border-color: magenta;
  }
  85.71429% {
      background-color: rgba(255, 165, 0, 0.3);
      border-color: orange;
  }
}
</style>
