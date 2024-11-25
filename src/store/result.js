import axios from "axios";
import { defineStore } from "pinia";

axios.defaults.baseURL = 'http://localhost:8080';

export const useResultStore = defineStore('result', {
    state: () => ({
        results: [],
        result: null
    }),

    getters: {
        MultiResult: (state) => state.results,
        singleResult: (state) => state.result
    },
    
    actions: {
        async fetchResultByRound(round) {
            try {
                const response = await axios.get(`/result/get/round/${round}`);
                this.result = response.data;
            } catch (error) {
                alert('ErrorCode: ', error.code);
                alert('ErrorDetail: ', error.detail);
            }
        },
        async fetchResultByPage(page) {
            try {
                const response = await axios.get(`/result/get/round/${round}`);
                this.result = response.data;
            } catch (error) {
                alert('ErrorCode: ', error.code);
                alert('ErrorDetail: ', error.detail);
            }
        },
        async fetchLastResult() {
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