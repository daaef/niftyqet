import { defineStore } from 'pinia'

export const useStore = defineStore({
    id: 'main',
    state: () => ({
        loading: false,
        details: null,
        wallet: null,
        isConnected: false
    }),
    actions: {
        connect(){},
        disconnect(){},
    }
})