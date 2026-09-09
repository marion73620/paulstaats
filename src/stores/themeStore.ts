import { defineStore } from 'pinia'
import type { ThemeInstance } from 'vuetify'

export const useThemeStore = defineStore('theme', {
  state: () => {
    return {
      dark: true
    }
  },
  actions: {
    switch(theme: ThemeInstance) {
      this.dark = !this.dark

      if (this.dark) {
        theme.change('dark')
      } else {
        theme.change('light')
      }
    }
  },
  persist: true
})
