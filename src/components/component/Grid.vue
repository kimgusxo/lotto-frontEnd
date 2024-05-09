<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="title text-center">통계 보기</h1>
      </v-col>
    </v-row>
    <v-row v-for="row in 15" :key="'row-' + row">
      <v-col cols="4" v-for="col in 3" :key="'col-' + col + '-row-' + row">
        <v-card class="pa-2" @click="openModal(((row - 1) * 3) + col)">
          <v-card-title class="text-center"> {{ ((row - 1) * 3) + col }}번 </v-card-title>
          <v-card-text>
            <graph :percentage="2.38524" :bonusPercentage="2.17542"/>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <NumberDetailInfo
      v-model="showDialog"
      :modalNumber="modalNumber"
      @update:dialog="handleDialogUpdate">
    </NumberDetailInfo>
  </v-container>
</template>

<script>
import Graph from './BarGraph.vue';
import NumberDetailInfo from './NumberDetailInfo.vue';

export default {
  components: {
    Graph,
    NumberDetailInfo
  },
  data() {
    return {
      showDialog: false,
      modalNumber: {}
    }
  },
  methods: {
    openModal(number) {
      this.modalNumber = {
        number: number,
        count: 154, // Sample data; you might want to fetch this dynamically
        probability: 2.54584,
        bonusProbability: 2.14626
      };
      this.showDialog = true;
    },
    handleDialogUpdate(value) {
      this.showDialog = value;
    }
  }
}
</script>

<style scoped>
.v-card-title {
  text-align: center;
}
</style>
