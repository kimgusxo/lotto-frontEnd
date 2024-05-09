<template>
  <v-container class="container">
    <AnimateBox/>
    <!-- 버튼 그룹 추가 -->
    <div class="button-group">
      <v-btn @click="drawNumbers(1)" class="draw-btn light-blue">1회 추첨</v-btn>
      <v-btn @click="drawNumbers(5)" class="draw-btn light-green">5회 추첨</v-btn>
      <v-btn @click="drawNumbers(10)" class="draw-btn pink">10회 추첨</v-btn>
    </div>
    <div class="grid-container">
      <div class="grid-item" v-for="(result, index) in results" :key="index">
        <Number :numbers="result.numbers" :bonus="result.bonus"/>
      </div>
    </div>
  </v-container>
</template>

<script>
import AnimateBox from './AnimateBox.vue';
import Number from './Number.vue';

export default {
  components: {
    AnimateBox,
    Number
  },
  data() {
    return {
      results: []
    };
  },
  methods: {
    drawNumbers(count) {
      this.results = []; // 기존 결과 초기화
      for (let i = 0; i < count; i++) {
        const numbers = Array.from({ length: 6 }, () => Math.floor(Math.random() * 45) + 1);
        const bonus = Math.floor(Math.random() * 45) + 1;
        this.results.push({ numbers, bonus });
      }
    }
  }
}
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* 상단 정렬로 변경 */
  height: 100vh; /* 화면의 높이만큼 컨테이너를 확장합니다. */
  padding-top: 10px;
}

.button-group {
  margin-top: 10px; /* 상단 여백 조정 */
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

.grid-container {
  margin: 10px;
  width: 100%; /* 그리드 컨테이너 폭 조정 */
  display: flex;
  flex-direction: column; /* 아이템을 수직으로 나열 */
  overflow-y: auto; /* 필요할 때만 수직 스크롤바를 표시 */
}


</style>
