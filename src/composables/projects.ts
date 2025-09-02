export type Subject = {
  title: string
  images: string[]
}

export type Project = {
  title: WorkType
  subtitle: string
  subjects: Subject[]
  mainImage: string
  coverImage: string
}

export enum WorkType {
  URBANISM = 'stedebouw',
  PLANNING = 'planologie',
  OUTSIDE = 'buitenruimte',
  SAME = 'evengoed'
}

export const projects: Project[] = [
  {
    title: WorkType.URBANISM,
    subjects: [{
      title: 'Massastudie en verkaveling',
      images: ['1-Dorpszicht-Terwolde-010416-min.png', '0-BPVelpNoord.png', 'Dekkerswald-0615-min.png', '0-Dekkerswald-klein-945x490.png']
    }, {
      title: 'Landgoederen',
      images: ['1MidTVDW.jpg', 'MidHtL.jpg']
    }, {
      title: 'Transformatie',
      images: []
    }, {
      title: 'Supervisie',
      images: []
    }],
    subtitle: 'Ruimtelijke analyse, aansprekende vormgeving en begeleiding',
    mainImage: '1-Dorpszicht-Terwolde-010416-min.png',
    coverImage: "GrootHtL.jpg",
  },
  {
    title: WorkType.PLANNING,
    subtitle: 'Duurzame visie, vastleggen en planadvies',
    subjects: [{
      title: 'Strategisch advies',
      images: ['1MidDeBeemt.jpg']
    }, {
      title: 'Principeverzoek',
      images: []
    }, {
      title: 'BOPA en omgevingsplan',
      images: []
    }, {
      title: 'Structuurvisie',
      images: ['1-bidbook-min-1.png', '3-bidbook-min-1.png', '1-presentatietek-structuurvisie-gemRheden.png']
    } ],
    mainImage: '1MidDeBeemt.jpg',
    coverImage: 'GrootDeBeemt.jpg',
  },
  {
    title: WorkType.OUTSIDE,
    subtitle: 'Menselijke maat, modern en groen',
    subjects: [{
      title: 'Beeldkwaliteitsplan',
      images: []
    }, {
      title: 'Pleinen en routes',
      images: ['1-Blinkertplein-min.png', '2-Blinkertplein-min.png', '3-Kwinkelier.png']
    }, {
      title: 'Straatmeubilair',
      images: ['vergaderhuis.jpg', '2-buitenruimte-Insula-Dei-Arnhem-2009-min.png', '3-buitenruimte-Insula-Dei-Arnhem-2009.png', '2-Veerstoep-Dieren-1.png']
    }, {
      title: 'Buitenkunst',
      images: ['2-tafel-met-stoelen.png']
    } ],
    mainImage: '2-tafel-met-stoelen.png',
    coverImage: 'parkeerplaats.png'
  },
  {
    title: WorkType.SAME,
    subtitle: 'Verrassend, duurzaam en betrokken',
    subjects: [{
      title: 'Participatie',
      images: ['participatie-2.jpg']
    }, {
      title: 'Advies welstand',
      images: ['caravan.png']
    }, {
      title: 'Popup-store',
      images: ['1-MOMO.png']
    }, {
      title: 'Buzz voor insectenkweek',
      images: ['LOGO-buzz-002.png']
    } ],
    mainImage: 'caravan.png',
    coverImage: 'GrootF28.jpg'
  }
]
