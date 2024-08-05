import axios from "axios";
import { defineStore } from "pinia";

export const useWinningReportStore = defineStore('winningReport', {
    state: () => ({
        winningReports: [],
        winningReport: null
    }),

    getters: {
        MultiWinningReport: (state) => state.winningReports,
        singleWinningReport: (state) => state.winningReport
    },
    
    actions: {
        async fetchWinningReport() {
            try {
                const response = await axios.get();
                this.winningReports = response.data;
            } catch (error) {
                alert('Error: ', error);
            }
        },
        async fetchWinningReportByRound(round) {
            try {
                const response = await axios.get();
                this.winningReport = response.data;
            } catch (error) {
                alert('Error: ', error)
            }
         }
    },
})