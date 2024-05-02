<template>
    <v-container>
      <v-row>
        <v-title class="lotto-title">1111회 로또 당첨번호</v-title>
      </v-row>
      <Number />
    </v-container>
  </template>
  
  <script>
  import Number from './Number.vue';
  
  export default {
    name: 'LottoNumbers',
    components: {
      Number
    }
  }
  </script>
  
  <style scoped>
  .lotto-title {
    font-size: 32px;
    font-weight: bolder;
    text-align: center;
    width: 100%;
    margin-bottom: 20px;
  }
  </style>
  