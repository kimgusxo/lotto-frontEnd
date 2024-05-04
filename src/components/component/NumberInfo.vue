<template>
    <v-container>
      <!-- 총 5줄 생성, 마지막 줄은 카드 5개만 출력 -->
      <v-row v-for="row in 5" :key="'row-' + row">
        <!-- 각 줄에 10개 카드, 마지막 줄은 조건부 렌더링으로 5개만 -->
        <v-col cols="1" v-for="col in (row < 5 ? 10 : 5)" :key="'col-' + col + '-row-' + row">
          <v-card class="pa-2">
            <v-card-title class="text-center">{{ ((row - 1) * 10) + col }}번</v-card-title>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import Graph from './BarGraph.vue';
  
  export default {
  }
  </script>
  
  <style scoped>
  .v-card-title {
    text-align: center;
  }
  </style>
  