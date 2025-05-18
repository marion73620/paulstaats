import { defineStore } from 'pinia'

export const useHandStore = defineStore('hand', {
  state: () => {
    return {
      showHand: true
    }
  },
  actions: {
    hideHand() {
      this.showHand = false
    }
  },
})