<template>
  <v-container>
    <v-row>
      <!-- 15개의 열을 생성합니다 -->
      <v-col v-for="n in 15" :key="n" class="custom-col">Col {{ n }}</v-col>
    </v-row>
    <v-row>
      <v-col v-for="n in 15" :key="n" class="custom-col">Col {{ n }}</v-col>
    </v-row>
    <v-row>
      <v-col v-for="n in 15" :key="n" class="custom-col">Col {{ n }}</v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>