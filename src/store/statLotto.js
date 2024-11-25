import axios from "axios";
import { defineStore } from "pinia";

axios.defaults.baseURL = 'http://localhost:8080';

export const useStatLottoStore = defineStore('statLotto', {
    state: () => ({
        statLottos: [],
        statLotto: null
    }),

    getters: {
        MultiStatLotto: (state) => state.statLottos,
        singleStatLotto: (state) => state.statLotto
    },
    
    actions: {
          async fetchStatLottoByNumber(number) {
            try {
              const response = await axios.get(`/statLotto/get/number/${number}`);
              this.statLotto = response.data;
            } catch (error) {
              alert('ErrorCode: ', error.code);
              alert('ErrorDetail: ', error.detail);
            }
          },
          async fetchAllStatLotto() {
            try {
              const response = await axios.get(`/statLotto/get/all`);
              this.statLottos = response.data;
            } catch (error) {
              alert('ErrorCode: ', error.code);
              alert('ErrorDetail: ', error.detail);
            }
          },
    },
})