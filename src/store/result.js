import axios from "axios";
import { defineStore } from "pinia";

axios.defaults.baseURL = 'http://localhost:8082';

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
        async fetchResultCurrent() {
            try {
                const response = await axios.get(`/result/get/lastOne`);
                this.result = response.data;
            } catch (error) {
                alert('Error: ', error);
            }
        },
        async fetchResultTop10() {
            try {
                const response = await axios.get();
                this.results = response.data;
            } catch (error) {
                alert('Error: ', error);
            }
        },
        async fetchDrawCount(count) {
            try {
                const response = await axios.get();
                this.results = response.data;
            } catch (error) {
                alert('Error: ', error)
            }
        }
    },
})