<template>
  <v-dialog :value="dialog" @update:modelValue="updateDialog" persistent max-width="900px">
    <v-card>
      <v-card-title class="headline">{{ title }}</v-card-title>
      <v-card-text>
        <div>
          당첨번호: {{ lotto.numbers }}<br>
          보너스 번호: {{ lotto.bonusNumber }}<br>
          추첨 일자: {{ lotto.drawDate }}<br>
          총 당첨금: {{ lotto.totalPrize }}
        </div>
        <v-row justify="center">
          <v-col v-for="(prize, index) in lotto.prizes" :key="index" cols="12" sm="12">
            <v-card>
              <v-card-title>등수: {{ prize.rank }}</v-card-title>
              <v-card-text>
                당첨 수: {{ prize.winners }}<br>
                등수 별 총 당첨금: {{ prize.totalPrizePerRank }}<br>
                1인당 당첨금: {{ prize.prizePerPerson }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="#FFFFFF" text @click="closeDialog">닫기</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'RoundDetailInfo',
  props: {
    dialog: Boolean,
    title: String,
    content: String,
    lotto: {
      type: Object,
      default: () => ({
        numbers: [],
        bonusNumber: '',
        drawDate: '',
        totalPrize: 0,
        prizes: []
      })
    }
  },
  methods: {
    updateDialog(value) {
      this.$emit('update:dialog', value);
    },
    closeDialog() {
      this.$emit('update:dialog', false);
    }
  }
}
</script>

<style scoped>
</style>
