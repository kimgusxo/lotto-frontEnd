<template>
  <div class="chart-container">
    <bar-chart :chart-data="chartData" :options="chartOptions"/>
  </div>
</template>

<script>
import { BarChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default {
  components: {
    BarChart
  },
  props: {
    percentage: Number,
    bonusPercentage: Number
  },
  computed: {
    chartData() {
      return {
        labels: ['기본 확률', '보너스 확률'],
        datasets: [
          {
            label: '확률 데이터',
            data: [this.percentage, this.bonusPercentage],
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
        maintainAspectRatio: false, // 차트의 비율을 유지하지 않음
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    }
  }
};
</script>

<style scoped>

</style>
