<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="title">회차 정보</h1>
      </v-col>
      <v-col>
        <v-text-field
          label="회차 검색"
          variant="outlined"
          v-model="searchQuery"
          append-icon="mdi-magnify"
          @click:append="logSearch"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row
      v-for="lottoInfo in lottoData"
      :key="lottoInfo.id"
      class="info-row"
      @click="openModal(lottoInfo)"
    >
      <v-col>
        <v-sheet class="sheet-padding">
          <div class="info-text">
            {{ lottoInfo.title }}
          </div>
        </v-sheet>
      </v-col>
    </v-row>
    <RoundDetailInfo
      v-model="showDialog"
      :title="modalTitle"
      :lotto="modalLotto"
      @update:dialog="handleDialogUpdate"
    />
    <BottomNav />
  </v-container>
</template>

<script>
import BottomNav from './BottomNav.vue';
import RoundDetailInfo from './RoundDetailInfo.vue';

export default {
  components: {
    BottomNav,
    RoundDetailInfo
  },
  name: 'RoundInfo',
  data() {
    return {
      showDialog: false,
      modalTitle: '',
      searchQuery: '',
      lottoData: [
        {
          id: 1,
          title: '1117회차 로또 정보',
          numbers: [5, 18, 30, 41, 43, 45],
          bonusNumber: 4,
          drawDate: '2024-05-01',
          totalPrize: 2000000000,
          prizes: [
            { rank: 1, winners: 2, totalPrizePerRank: 1000000000, prizePerPerson: 500000000 },
            { rank: 2, winners: 5, totalPrizePerRank: 500000000, prizePerPerson: 100000000 },
            { rank: 3, winners: 50, totalPrizePerRank: 125000000, prizePerPerson: 2500000 },
            { rank: 4, winners: 500, totalPrizePerRank: 25000000, prizePerPerson: 50000 },
            { rank: 5, winners: 5000, totalPrizePerRank: 5000000, prizePerPerson: 1000 }
          ]
        },
        {
          id: 2,
          title: '1118회차 로또 정보',
          numbers: [1, 11, 20, 25, 34, 36],
          bonusNumber: 13,
          drawDate: '2024-05-08',
          totalPrize: 1500000000,
          prizes: [
            { rank: 1, winners: 1, totalPrizePerRank: 750000000, prizePerPerson: 750000000 },
            { rank: 2, winners: 3, totalPrizePerRank: 300000000, prizePerPerson: 100000000 },
            { rank: 3, winners: 30, totalPrizePerRank: 90000000, prizePerPerson: 3000000 },
            { rank: 4, winners: 300, totalPrizePerRank: 15000000, prizePerPerson: 50000 },
            { rank: 5, winners: 3000, totalPrizePerRank: 3000000, prizePerPerson: 1000 }
          ]
        }
      ]
    };
  },
  methods: {
    openModal(lottoInfo) {
      this.modalTitle = `${lottoInfo.title} 상세 정보`;
      this.modalLotto = lottoInfo;
      this.showDialog = true;
    },
    handleDialogUpdate(value) {
      this.showDialog = value;
    },
    logSearch() {
      alert('Search Query: ' + this.searchQuery);
    }
  }
}
</script>

<style scoped>
.container {
  border: 2px solid #ccc;
  padding: 20px;
}

.title {
  text-align: center;
  font-weight: bold;
  font-size: 32px;
}

.info-row {
  margin-top: 10px;
  cursor: pointer;
}

.info-text {
  font-weight: bold;
  font-size: 20px;
}

.sheet-padding {
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
