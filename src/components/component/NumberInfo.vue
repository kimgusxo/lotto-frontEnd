<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="title text-center">번호 정보</h1>
      </v-col>
    </v-row>
    <v-row v-for="row in 9" :key="'row-' + row" justify="center">
      <v-col cols="2" v-for="col in 5" :key="'col-' + col + '-row-' + row">
        <v-card class="d-flex flex-column justify-center align-center pa-4 my-card">
          <v-avatar :class="getColorClass(((row - 1) * 5) + col)" class="circle-avatar">
            <span class="white--text headline font-weight-bold"
            @click="openModal(((row - 1) * 5) + col)">{{ ((row - 1) * 5) + col }}</span>
          </v-avatar>
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
import NumberDetailInfo from './NumberDetailInfo.vue';

export default {
  components: {
    NumberDetailInfo
  },
  name: 'NumberInfo',
  data() {
    return {
      showDialog: false,
      modalNumber: {}
    }
  },
  methods: {
    getColorClass(number) {
      const colorClasses = ['color-red', 'color-green', 'color-blue', 'color-cyan', 'color-magenta'];
      const index = Math.floor((number - 1) / 10) % colorClasses.length;
      return colorClasses[index];
    },
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
.my-card {
  min-height: 150px; /* 카드의 최소 높이 설정 */
}

.circle-avatar {
  border-radius: 50%; /* 완벽한 원 모양 */
  width: 100px; /* 원의 너비 설정 */
  height: 100px; /* 원의 높이 설정 */
 
}

/* 색상 클래스 정의 */
.color-red { background-color: rgba(255, 0, 0, 0.3); border-color: red; border-width: 3px; border-style: solid; }
.color-green { background-color: rgba(0, 255, 0, 0.3); border-color: green; border-width: 3px; border-style: solid; }
.color-blue { background-color: rgba(0, 0, 255, 0.3); border-color: blue; border-width: 3px; border-style: solid; }
.color-cyan { background-color: rgba(0, 255, 255, 0.3); border-color: cyan; border-width: 3px; border-style: solid; }
.color-magenta { background-color: rgba(255, 0, 255, 0.3); border-color: magenta; border-width: 3px; border-style: solid; }

.headline {
  color: #757575; /* 텍스트 색상 */
  font-size: 48px;
  font-weight: bold;
}
</style>
