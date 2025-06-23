import { Routes } from '@/router/routes'
import type { Component } from 'vue'
import CV from '@/components/profile/CV.vue'
import Clients from '@/components/profile/Clients.vue'
import Inspiration from '@/components/profile/Inspiration.vue'
import Partners from '@/components/profile/Partners.vue'
import ProfileComp from '@/components/profile/ProfileComp.vue'

export type Navigation = {
  title: string | WorkType
  subtitle?: string
  to?: Routes
  component?: Component
  subNav?: Navigation[]
  image?: string
  coverImage?: string
}

export enum WorkType {
  URBANISM = 'stedebouw',
  PLANNING = 'planologie',
  OUTSIDE = 'buitenruimte',
  SAME = 'evengoed'
}

export const workNav: Navigation[] = [
 {
    title: WorkType.URBANISM,
    image: "MidHtL.jpg",
    coverImage: "GrootHtL.jpg",
  },
  {
    title: WorkType.PLANNING,
    subtitle: "Duurzame visie, vastleggen en planadvies",
    image: "1MidDeBeemt.jpg",
    coverImage: 'GrootDeBeemt.jpg',
  },
  {
    title: WorkType.OUTSIDE,
    image: "1MidF28.jpg",
    coverImage: "GrootF28.jpg"
  },
  {
    title: WorkType.SAME,
    image: "participatie-2.jpg"
  }
]

export const profileNav: Navigation[] = [
  {
    title: 'PROFIEL',
    component: ProfileComp
  },
  {
    title: 'CURRICULUM VITAE',
    component: CV
  },
  {
    title: 'PARTNERS',
    component: Partners
  },
  {
    title: 'OPDRACHTGEVERS',
    component: Clients
  },
  {
    title: 'INSPIRATIE',
    component: Inspiration
  }
]

export const mainNav: Navigation[] = [
  {
    title: 'WERK',
    to: Routes.Work,
    subNav: workNav
  },
  {
    title: 'PROFIEL',
    to: Routes.Profile,
    subNav: profileNav
  },
  {
    title: 'CONTACT',
    to: Routes.Contact
  }
]
