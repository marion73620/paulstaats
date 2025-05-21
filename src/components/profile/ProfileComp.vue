<script setup lang="ts">
import bandana1 from '@/assets/images/profile/bandana1.jpg'
import bandana3 from '@/assets/images/profile/bandana3.jpg'
import bandana4 from '@/assets/images/profile/bandana4.jpg'
import bandana5 from '@/assets/images/profile/bandana5.jpg'
import bandana8 from '@/assets/images/profile/bandana8.jpg'
import bandana9 from '@/assets/images/profile/bandana9.jpg'
import bandana10 from '@/assets/images/profile/bandana10.jpg'
import bandana11 from '@/assets/images/profile/bandana11.jpg'
import bandana12 from '@/assets/images/profile/bandana12.jpg'
import bandanalara from '@/assets/images/profile/bandanalara.jpeg'
import bandanakat from '@/assets/images/profile/bandanakat.jpg'
import Flipbook from '@/components/Flipbook.vue'
import Page from '@/components/Page.vue'
import { ref } from 'vue'
import { useElementSize } from '@vueuse/core'

const imageRef = ref(null)
const { width, height } = useElementSize(imageRef)
</script>

<template>
  <Page>
    <template v-slot:text>
      <div class="mb-4">
        Mijn stedebouwkundige gedrevenheid komt voort uit een brede interesse hoe mensen samenleven.
        Voor mij zijn er geen verschillen tussen wonen, werken en ontspannen; ze bestaan naast
        elkaar en lopen als vanzelf in elkaar over. Dit mag ik vormgeven, stedebouw is een beeldende
        discipline. En dat doe ik met mensen waarmee het klikt, ik kan het niet alleen. Na een ruime
        periode bij bureaus en gemeenten werk ik nu graag met een persoonlijke benadering naar de
        opdrachtgever. Door samenwerking met collega’s en een netwerk van specialisten kan ik
        uiteenlopende opgaves aan en snel inspelen op de vraag. Het kan gaan om een herinrichting
        van een straat, een bebouwingsstudie of een bestemmingsplan.
      </div>
      <div>
        Ik voel mij goed bij complexe ruimtelijke situaties en uiteenlopende belangen. Mijn
        opdrachtgever kan komen met een moeilijke opgave, samen zoeken we naar een creatieve
        oplossing. Met de gebruikers moeten de plannen pas definitief worden, voor een ontwerper een
        oefening in geduld. Mijn plannen voor de leefomgeving zijn om bij weg te dromen, èn om te
        realiseren. Ze geven plezier en verbeteren de stad en het landschap. Ik bijt me daarbij vast
        in de opgave met een degelijke analyse; pas dan krijgt een plan iets vanzelfsprekends. Het
        plan moet ten dienste staan van de gebruikers en toch geworteld zijn in de omgeving.
        Duurzaam uiteraard en dat begint bij minder gebruiken en produceren. Oftewel veel hergebruik
        van bestaand vastgoed, transformatie van bebouwd gebied en het stimuleren van groene
        ruimtes.
      </div>
    </template>
    <template v-slot:image>
      <div ref="imageRef">
        <Flipbook
          :pages="[
            bandanalara,
            bandana1,
            bandana3,
            bandana4,
            bandana5,
            bandana8,
            bandana9,
            bandana10,
            bandana11,
            bandana12,
            bandanakat
          ]"
          :imageHeight="height"
          :imageWidth="width"
        />
      </div>
    </template>
  </Page>
</template>
