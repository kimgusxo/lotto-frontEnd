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
        
    },
})