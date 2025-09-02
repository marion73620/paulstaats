<script setup lang="ts">
import Sharing from '@/components/Sharing.vue'
import ProjectNavigation from '@/components/ProjectNavigation.vue'
import Flipbook from '@/components/Flipbook.vue'
import Page from '@/components/Page.vue'
import CoverImage from '@/components/CoverImage.vue'
import { projects, type Subject } from '@/composables/projects'
import { isMobile } from '@/composables/isMobile'
import { getImageUrl } from '@/composables/getSrcURL'
import { computed, onUpdated, ref } from 'vue'
import { useElementSize } from '@vueuse/core'
import triangleRightMiddle from '@/assets/images/logo/triangle-right-middle.svg'

const props = defineProps({
  project: { type: String, required: true }
})


const marginFooter = isMobile ? 'mx-2' : ''

const projectIndex = computed(() =>
  projects.findIndex((work) => work.title === props.project)
)
const project = computed(() => projects[projectIndex.value])

const tab = ref(project.value.subjects[0].title)

const activeSubject: Subject = computed(() => {
  console.log(tab.value)
  console.log(project.value.subjects.find((subj) => subj.title == tab.value))
  return project.value.subjects.find((subj) => subj.title == tab.value)

})

const imageRef = ref(null)
const { width, height } = useElementSize(imageRef)

// Need the image to get a ref for the Flipbook
const imgHeight = computed(() => activeSubject.images?.length > 1 ? "0" : "")

const flipBookImages = computed(() => activeSubject.images?.map((image: string) => {

  return getImageUrl(image, `work/${project.value.title}`)
}))

const coverImageUrl = computed(() => getImageUrl(project.value?.coverImage, `work/${project.value.title}`))

onUpdated(() => window.scrollTo(0, 0))
</script>

<template>
  <div>
    <CoverImage
      :images="[coverImageUrl]"
      :title="project?.title"
      :subTitle="project?.subtitle"
      :class="isMobile ? 'mb-2' : 'mb-8'"
    />
<!--    <Page>-->
      <v-container :fluid="isMobile">
        <div class="d-flex flex-row">
          <v-tabs
            v-model="tab"
            color="primary"
            direction="vertical"
            :hide-slider="true"
          >
            <v-tab v-for="item in project?.subjects"
                   :text="item.title" :value="item.title"></v-tab>
          </v-tabs>

          <v-tabs-window v-model="tab">
            <v-tabs-window-item v-for="(item, i) in project?.subjects" :key="i"
                                :value="item.title">
              <div class="ml-10" style="height: 400px;">
                <v-img width="40vw" :height="imgHeight" max-height="400" ref="imageRef" :src="getImageUrl(item.images[0], `work/${project.title}`)"
                />
                <div v-if="activeSubject.images.length > 1"
                ><Flipbook :pages="flipBookImages" :imageHeight="height" :imageWidth="width"
                /></div>
              </div>
            </v-tabs-window-item>
          </v-tabs-window>
        </div>
      </v-container>
<!--      <template #text>-->
<!--        <v-list :selected="[project.subjects[0]]">-->
<!--          <v-list-item-->
<!--            v-for="(item, i) in project?.subjects"-->
<!--            :key="i"-->
<!--            :value="item"-->
<!--            @click="() => activeSubject = item"-->
<!--          >-->
<!--            <template v-slot:append>-->
<!--              <v-img width="22px" :src="triangleRightMiddle"/>-->
<!--            </template>-->

<!--            <v-list-item-title v-text="item.title"></v-list-item-title>-->
<!--          </v-list-item>-->
<!--        </v-list>-->
<!--      </template>-->
<!--      <template #image>-->
<!--        <div>-->
<!--          <v-row-->
<!--          ><v-img :height="imgHeight" ref="imageRef" :src="getImageUrl(activeSubject.images[0], `work/${project.title}`)"-->
<!--          /></v-row>-->
<!--          <v-row v-if="activeSubject.images.length > 1"-->
<!--            ><Flipbook :pages="flipBookImages" :imageHeight="height" :imageWidth="width"-->
<!--          /></v-row>-->
<!--        </div>-->
<!--      </template>-->
<!--      <template #footer-->
<!--        ><v-row :class="marginFooter"><Sharing /></v-row>-->
<!--        <v-row :class="marginFooter"><ProjectNavigation :index="projectIndex" /></v-row-->
<!--      ></template>-->
<!--    </Page>-->
  </div>
</template>
