<script setup lang="ts">
import { useThemeStore } from '@/stores/themeStore'
import router from '@/router'
import { Routes } from '@/router/routes'
import logo from '@/assets/images/logo/logo-paul.png'
import signatureWhite from '@/assets/images/logo/handtekening-ps-wit.png'
import signatureBlack from '@/assets/images/logo/handtekening-ps-black.png'
import { storeToRefs } from 'pinia'

const themeStore = useThemeStore()
const { dark } = storeToRefs(themeStore)
</script>

<template>
  <div class="logo d-flex pa-3" @click="() => router.push({ name: Routes.Work })">
    <v-img class="mr-4 logo__image" :src="logo" />
    <v-img class="logo__signature" v-if="dark" :src="signatureWhite" />
    <v-img class="logo__signature" v-else :src="signatureBlack" />
  </div>
</template>
