<script setup lang="ts">
import { isMobile } from '@/composables/isMobile'
import signatureBlack from '@/assets/images/logo/handtekening-ps-black.png'
import signatureWhite from '@/assets/images/logo/handtekening-ps-wit.png'
import { useThemeStore } from '@/stores/themeStore'
import { storeToRefs } from 'pinia'
import triangleBlack from '@/assets/images/logo/triangle-right-black.svg'
import triangleWhite from '@/assets/images/logo/triangle-right-white.svg'
import router from '@/router'
import { Routes } from '@/router/routes'

const themeStore = useThemeStore()
const { dark } = storeToRefs(themeStore)
</script>

<template>
  <v-footer
    v-if="isMobile"
    :height="50"
    app
    class="px-0"
    @click="() => router.push({ name: Routes.Work })"
  >
    <v-img
      class="signature"
      :src="dark ? signatureWhite : signatureBlack"
      height="50px"
      width="100px" /><v-img
      class="logo"
      :src="dark ? triangleBlack : triangleWhite"
      height="45px"
      width="45px"
  /></v-footer>
</template>
