import { defineStore } from "pinia";

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
        
    },
})