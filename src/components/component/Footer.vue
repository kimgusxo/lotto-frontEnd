<template>
  <v-footer
    class="text-center d-flex flex-column"
  >
    <div class="pt-0">
      로또 추첨 알고리즘은 1회부터 현재 회차까지의 출현횟수를 확률로 기록하여 작성됩니다. <br>
      따라서 로또번호를 '추천'해주는 방식이 아닌 로또 결과를 '예측'하는 방식으로 이루어집니다. <br>
      이점 유의하시며 사용하시길 바랍니다.
    </div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
  </v-footer>
</template>

<script>
  export default {

  }
</script>