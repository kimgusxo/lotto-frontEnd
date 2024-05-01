<template>
  <v-card>
    <!-- 폰트 크기, 두께, 색상 및 테두리를 적용한 타이틀 -->
    <v-card-title class="text-center title-with-white-border">번호별 그래프</v-card-title>
    <v-card-text>
      <div style="position: relative;">
        <canvas ref="pieChartCanvas"></canvas>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const pieChartCanvas = ref(null);
const ranges = ["1-9", "10-19", "20-29", "30-39", "40-45"];
const counts = [10, 20, 30, 40, 50];

const backgroundColors = [
  'rgba(255, 99, 132, 0.2)', // Light Red
  'rgba(54, 162, 235, 0.2)', // Light Blue
  'rgba(255, 206, 86, 0.2)', // Light Yellow
  'rgba(75, 192, 192, 0.2)', // Light Green
  'rgba(153, 102, 255, 0.2)' // Light Purple
];
const borderColors = [
  'rgba(255, 99, 132, 1)', // Red
  'rgba(54, 162, 235, 1)', // Blue
  'rgba(255, 206, 86, 1)', // Yellow
  'rgba(75, 192, 192, 1)', // Green
  'rgba(153, 102, 255, 1)' // Purple
];

const pieChartData = {
  labels: ranges,
  datasets: [{
    data: counts,
    backgroundColor: backgroundColors,
    borderColor: borderColors,
    borderWidth: 1
  }]
};

onMounted(() => {
  new Chart(pieChartCanvas.value.getContext('2d'), {
    type: 'pie',
    data: pieChartData,
    options: {
      responsive: true,
      plugins: {
        legend: {
            position: 'top',
        },
        tooltip: {
            mode: 'index',
            intersect: false,
        }
      }
    }
  });
});
</script>

<style scoped>
/* 흰색 테두리를 가진 글씨 스타일 */
.title-with-white-border {
  font-size: 32px;
  font-weight: bold;
  color: #FFFFFF; /* 반투명 흰색 텍스트 */
}
</style>