import axios from "axios";
import { defineStore } from "pinia";

axios.defaults.baseURL = 'http://localhost:8082';

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
              alert('Error: ', error);
            }
        },

        async fetchStatLottoAll() {
          try {

          } catch (error) {
            alert('Error: ', error);
          }
        }
    },
})