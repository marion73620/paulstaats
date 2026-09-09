<script setup lang="ts">
import { VNavigationDrawer } from 'vuetify/components'
import { mainNav } from '@/composables/navigation'

defineProps({
  modelValue: { type: Boolean, default: false }
})
defineEmits(['update:modelValue'])

</script>

<template>
  <v-navigation-drawer
    :modelValue="modelValue"
    :permanent="false"
    temporary
    class="bg-background"
    @update:modelValue="(value: boolean) => $emit('update:modelValue', value)"
  >
    <div class="navigation__content mt-2 d-flex flex-column justify-space-between">
      <v-list density="compact" nav>
        <v-list-item
          v-for="({ title, to, subNav }, i) in mainNav"
          :key="i"
          :title="title"
          :to="{ name: to }"
          class="navigation__content__main"
          ><v-list-item
            v-for="({ title: subTitle }, j) in subNav"
            :key="j"
            :title="subTitle.toLowerCase()"
            :to="{ name: to, params: { content: subTitle } }"
          ></v-list-item>
        </v-list-item>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>
