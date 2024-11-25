import axios from "axios";
import { defineStore } from "pinia";

axios.defaults.baseURL = 'http://localhost:8082';

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
        async fetchWinningReportByRound(round) {
            try {
                const response = await axios.get(`/result/get/round/${round}`);
                this.result = response.data;
            } catch (error) {
                alert('ErrorCode: ', error.code);
                alert('ErrorDetail: ', error.detail);
            }
        },
        async fetchWinningReportByPage(page) {
            try {
                const response = await axios.get(`/result/get/round/${round}`);
                this.result = response.data;
            } catch (error) {
                alert('ErrorCode: ', error.code);
                alert('ErrorDetail: ', error.detail);
            }
        },
        async fetchLastWinningReport() {
            try {
                const response = await axios.get(`/result/get/round/${round}`);
                this.result = response.data;
            } catch (error) {
                alert('ErrorCode: ', error.code);
                alert('ErrorDetail: ', error.detail);
            }
        }

    },
})