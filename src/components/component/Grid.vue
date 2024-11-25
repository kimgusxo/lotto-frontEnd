<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="title text-center">통계 보기</h1>
      </v-col>
    </v-row>
    <v-row v-for="row in Math.ceil(statLottos.length / 3)" :key="'row-' + row">
      <v-col cols="4" v-for="col in 3" :key="'col-' + col + '-row-' + row">
        <v-card class="pa-2" v-if="statLottos[(row - 1) * 3 + col - 1]" @click="openModal(statLottos[(row - 1) * 3 + col - 1])">
          <v-card-title class="text-center">{{ statLottos[(row - 1) * 3 + col - 1].number }}번</v-card-title>
          <v-card-text>
            <graph 
              :percentage="statLottos[(row - 1) * 3 + col - 1].probability" 
              :bonusPercentage="statLottos[(row - 1) * 3 + col - 1].bonusProbability"/>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <NumberDetailInfo
      v-model="showDialog"
      :modalNumber="modalNumber"
      @update:dialog="handleDialogUpdate"
    />
  </v-container>
</template>

<script>
import { useStatLottoStore } from '@/store/statLotto';
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
  computed: {
    statLottos() {
      const store = useStatLottoStore();
      return store.MultiStatLotto;
    }
  },
  methods: {
    openModal(statLotto) {
      this.modalNumber = {
        number: statLotto.number,
        count: statLotto.count,
        probability: statLotto.probability,
        bonusProbability: statLotto.bonusProbability
      };
      this.showDialog = true;
    },
    handleDialogUpdate(value) {
      this.showDialog = value;
    }
  },
  mounted() {
    const store = useStatLottoStore();
    store.fetchAllStatLotto();
  }
}
</script>

<style scoped>
.v-card-title {
  text-align: center;
}
</style>
