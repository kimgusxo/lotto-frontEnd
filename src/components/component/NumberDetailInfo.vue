<template>
    <v-dialog :value="dialog" @update:modelValue="updateDialog" persistent max-width="600px">
      <v-card>
        <v-card-title class="headline">{{ modalNumber.number }}</v-card-title>
        <v-card-text>
          번호: {{ modalNumber.number }}<br>
          출현 횟수: {{ modalNumber.count }}<br>
          확률: {{ modalNumber.probability }}%<br>
          보너스 번호 확률: {{ modalNumber.bonusProbability }}%
        </v-card-text>
        <BarGraph :percentage="modalNumber.probability" :bonus-percentage="modalNumber.bonusProbability"/>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="updateDialog(false)">닫기</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  import BarGraph from './BarGraph.vue'; // BarGraph 컴포넌트 경로 확인 후 수정 필요
  
  export default {
    name: 'NumberDetailInfo',
    components: {
      BarGraph
    },
    props: {
      dialog: Boolean,
      modalNumber: Object
    },
    methods: {
      updateDialog(value) {
        this.$emit('update:dialog', value);
      }
    }
  }
  </script>
  
  <style scoped>
  .headline {
    font-size: 24px;
    font-weight: bold;
  }
  </style>
  