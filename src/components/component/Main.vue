<template>
    <v-container>
        <v-row align="center" class="my-12">
          <!-- BaseInfo 컴포넌트를 화면의 절반에 배치하고 중앙 정렬 -->
          <v-col cols="6" class="d-flex align-center justify-center">
            <BaseInfo />
          </v-col>
  
          <!-- PieGraph 컴포넌트를 나머지 화면 절반에 배치하고 중앙 정렬 -->
          <v-col cols="6" class="d-flex align-center justify-center">
            <PieGraph />
          </v-col>
        </v-row>
    </v-container>
  </template>
  
  <script>
  import BaseInfo from './BaseInfo.vue';
  import PieGraph from './PieGraph.vue';
  
  export default {
    components: {
      BaseInfo,
      PieGraph
    }
  }
  </script>
  
  <style>
  /* 필요한 경우 여기에 추가 스타일링 */
  </style>
  