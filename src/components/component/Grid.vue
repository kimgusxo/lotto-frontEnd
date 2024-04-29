<template>
  <v-container>
    <!-- 15행을 생성, 각 행에는 3개의 카드가 있음 -->
    <v-row v-for="row in 15" :key="'row-' + row">
      <!-- 행당 3개의 칼럼(카드) -->
      <v-col cols="4" v-for="col in 3" :key="'col-' + col + '-row-' + row">
        <v-card class="pa-2">
          <v-card-title>Card {{ ((row - 1) * 3) + col }}</v-card-title>
          <v-card-text>This is card number {{ ((row - 1) * 3) + col }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CardGrid'
}
</script>

<style>
/* 스타일링 추가 가능 */
</style>
