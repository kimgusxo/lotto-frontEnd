<template>
  <bar-chart :chart-data="chartData" :options="chartOptions"/>
</template>

<script>
import { BarChart } from 'vue-chart-3'; // BarChart 컴포넌트 사용
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default {
  components: {
    BarChart // 막대 그래프 컴포넌트 등록
  },
  props: {
    percentage: Number, // 기본 확률
    bonusPercentage: Number // 보너스 확률
  },
  computed: {
    chartData() {
      return {
        labels: ['기본 확률', '보너스 확률'], // 두 개의 레이블을 지정
        datasets: [
          {
            label: '확률 데이터',
            data: [this.percentage, this.bonusPercentage], // 각 레이블에 해당하는 데이터
            backgroundColor: [
              'rgba(255, 99, 132, 0.3)', 
              'rgba(54, 162, 235, 0.3)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)', 
              'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
          }
        ]
      };
    }
  },
  data() {
    return {
      chartOptions: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: false // 범례를 표시하지 않음
          }
        }
      }
    }
  }
};
</script>
