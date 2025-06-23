<script setup lang="ts">
import Sharing from '@/components/Sharing.vue'
import ProjectNavigation from '@/components/ProjectNavigation.vue'
import ProjectText from '@/components/ProjectText.vue'
import Flipbook from '@/components/Flipbook.vue'
import Page from '@/components/Page.vue'
import CoverImage from '@/components/CoverImage.vue'
import { projects } from '@/composables/projects'
import { isMobile } from '@/composables/isMobile'
import { getImageUrl, getVideoUrl } from '@/composables/getSrcURL'
import { computed, onUpdated, ref } from 'vue'
import { useElementSize } from '@vueuse/core'
import { workNav } from '@/composables/navigation.ts'
import triangleRightMiddle from '@/assets/images/logo/triangle-right-middle.svg'

const props = defineProps({
  workName: { type: String, required: true }
})

const marginBottom = 'mb-6'
const marginFooter = isMobile ? 'mx-2' : ''

const projectIndex = computed(() =>
  workNav.findIndex((work) => work.title === props.workName)
)
const project = computed(() => workNav[projectIndex.value])

const imageRef = ref(null)
const { width, height } = useElementSize(imageRef)

// const flipBookImagesUrl = computed(() => project.value?.flipbookImages?.map((image: string) =>
//       getImageUrl(image, `work/${project.value.urlTitle}`)
//   )
// )
const flipBookImagesUrl = computed(() => "")
const coverImageUrl = computed(() => {
  console.log('coverImage', project.value)
  return getImageUrl(project.value?.coverImage, `work`)
})

const videoWidth = isMobile ? window.innerWidth - 40 : 800
const videoHeight = isMobile ? videoWidth * 0.56 : 450

const setClasses = () => {
  // Still need the image for the width calculation, but hiding it by setting height to 0
  //return project.value?.flipbookImages ? 'h-0 marginBottom' : 'marginBottom'
  return "marginBottom"
}

const items =
  [
    'Strategisch advies',
    'Principeverzoek',
    'BOPA en omgevingsplan',
    'Structuurvisie'
  ]


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
    <Page>
      <template #text>
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
          >
            <template v-slot:append>
              <v-img width="22px" :src="triangleRightMiddle"/>
            </template>

            <v-list-item-title v-text="item"></v-list-item-title>
          </v-list-item>
        </v-list>
      </template>
      <template #image>
        <div>
<!--          <v-row v-if="project?.flipbookImages" :class="marginBottom"-->
<!--            ><Flipbook :pages="flipBookImagesUrl" :imageHeight="height" :imageWidth="width"-->
<!--          /></v-row>-->
          <v-row v-if="project?.image" :class="setClasses()"
            ><v-img ref="imageRef" :src="getImageUrl(project.image, `work`)"
          /></v-row>
<!--          <v-row v-if="project?.video" :class="marginBottom"-->
<!--            ><video :width="videoWidth" :height="videoHeight" controls>-->
<!--              <source :src="getVideoUrl(project.video)" type="video/mp4" />-->
<!--              Uw browser ondersteunt het video element niet.-->
<!--            </video></v-row-->
          >
        </div>
      </template>
      <template #footer
        ><v-row :class="marginFooter"><Sharing /></v-row>
        <v-row :class="marginFooter"><ProjectNavigation :index="projectIndex" /></v-row
      ></template>
    </Page>
  </div>
</template>
