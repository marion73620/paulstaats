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
      this.dark ? theme.change('dark') : theme.change('light')
    }
  },
  persist: true
})
