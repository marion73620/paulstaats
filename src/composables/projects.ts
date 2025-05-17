import { WorkType } from '@/composables/navigation'

type BaseProject = {
  type: WorkType[]
  urlTitle: string
  title: string
  subTitle?: string
  text: string
  link?: string
  linkText?: string
  coverImage: string
  video?: string
  music?: string
}

type ImageProject = BaseProject & {
  image: string
  flipbookImages?: never
}

type FlipbookProject = BaseProject & {
  flipbookImages: string[]
  image?: never
}

export type Project = ImageProject | FlipbookProject


export const projects: Project[] = [
  {
    type: [WorkType.URBANISM, WorkType.PLANNING, WorkType.OUTSIDE],
    urlTitle: 'bedrijventerrein-de-beemd',
    title: 'Bedrijventerrein de Beemd',
    subTitle: 'Gemeente Rheden – Velp 2005',
    text: 'Als stedebouwkundige van de gemeente Rheden verantwoordelijk voor het ruimtelijk ontwerp, bestemmingsplan en beeldkwaliteitsplan van het bedrijventerrein aan de A348 en A12. De doorzichten naar het landschap en bestaande elementen bepaalden sterk de inrichting. De gesloten bouwblokken geven rust en flexibiliteit voor een gefaseerde invulling.',
    link: 'Beeldkwaliteitsplan-De-Beemd.pdf',
    linkText: 'Link naar Beeldkwaliteitsplan De Beemd.',
    coverImage: 'GrootDeBeemt.jpg',
    flipbookImages: ['1MidDeBeemt.jpg', '2MidDeBeemt.jpg', '3MidDeBeemt.jpg', '4MidDeBeemt.jpg', '5MidDeBeemt.jpg']
  },
  {
    type: [WorkType.URBANISM, WorkType.OUTSIDE],
    urlTitle: 'landgoed-huis-te-lathum',
    title: 'Landgoed Huis te Lathum',
    subTitle: 'Gemeente Zevenaar',
    text:
      'Op het landgoed vormt het Huis te Lathum het ruimtelijke ‘hoofdmonument’. De oude tuin bij het Huis wordt hersteld. Beide liggen op een verhoging in het terrein, die vroeger werd omgeven door een ondiepe gracht. Huis, erf, tuin met prieel en gracht vormen een eigen eenheid op het landgoed. De bijgebouwen liggen aan een andere ruimte, bereikbaar via dezelfde hoofdentree vanaf de Koestraat. De nieuwbouw maakt door de architectuur en materiaalgebruik een samenhangend, agrarisch ensemble.' +
      '\n\nIn het noordelijk deel van het plangebied komen vier aaneengesloten recreatiewoningen, in de vorm van een kapschuur. De naastgelegen schuur wordt als berging bij de woning betrokken. De bestaande schuur van de oude boerderij is recent hersteld met zoveel mogelijk historische referenties. Deze ruimte gaat tevens dienen voor de opslag van bouw- en schildermateriaal, hobbymatige houtbewerking en voor de stalling van kranen en aanhangwagens. Waarschijnlijk zijn beide schuren ooit bewoond geweest door landarbeiders van het landgoed Huis te Lathum.' +
      '\n\nOm de nieuwbouw te realiseren worden er ecologische maatregelen getroffen. In samenhang ontstaat zo een transformatie van het historische landgoed.',
    coverImage: 'GrootHtL.jpg',
    flipbookImages: ['Mid2HtL.jpg', 'Mid3HtL.jpg', 'Mid4HtL.jpg', 'MidHtL.jpg']
  },
  {
    type: [WorkType.OUTSIDE],
    urlTitle: 'doorfietsroute-f28',
    title: 'Doorfietsroute F28',
    subTitle: 'Provincie Utrecht 2017',
    text: 'In opdracht van de Loendersloot-groep is met Merlijn Kamp een inpassingsstudie verricht voor de doorfietsroute-f28, een nieuwe fietsverbinding tussen Amersfoort en Utrecht. De Provincie Utrecht verkent de mogelijkheden voor een nieuw fietspad met als thema ‘De Stijl’. Tijdens de route van 20 ervaart de fietser hoogteverschillen, zowel landelijk als stedelijk gebied en doorkruist de Hollandse Waterlinie. Uitwerking geschiedt per gemeente; aanleg vanaf 2022.',
    coverImage: 'GrootF28.jpg',
    flipbookImages: ['1MidF28.jpg', '2MidF28.jpg', '3MidF28.jpg', '1MidF28.jpg']
  },
  {
    type: [WorkType.URBANISM, WorkType.OUTSIDE],
    urlTitle: 'landgoed-deelerwoud',
    title: 'Landgoed Deelerwoud',
    subTitle: 'Gemeente Apeldoorn 2018',
    text:
      'In opdracht van de Stichting Huis Deelerwoud is een Toekomstvisie voor het landgoed-deelerwoud opgesteld. Het plan is in samenwerking met rentmeester Gerrit Jan Liet en het bureau Econsultancy ontwikkeld en wordt besproken met gemeente Apeldoorn en provincie Gelderland. In het plan voor de komende tien jaar staan de besluiten die cruciaal zijn voor het voortbestaan van het landgoed in zijn huidige vorm en met zijn kernkwaliteiten. Het landgoed bevindt zich in Natura 2000 gebied en het Gelders Natuurnetwerk. Het bijzondere karakter met de rust, natuur- en cultuurhistorische waarden is alleen te behouden door een gewijzigd beheer en als er op strategische plekken ingrepen plaatsvinden. Onder strenge voorwaarden worden aan de randen locaties ontwikkeld voor woningbouw.' +
      '\n\nHet plan is vrijgegeven voor inspraak en moet uiteindelijk leiden tot een algehele bestemmingsplanherziening.',
    coverImage: 'GrootTVDW.jpg',
    flipbookImages: ['1MidTVDW.jpg', '3MidTVDW.jpg', '4MidTVDW.jpg', '2MidTVDW.jpg']
  },
  {
    type: [WorkType.URBANISM, WorkType.OUTSIDE],
    urlTitle: 'woonwijk-dorpszicht',
    title: 'Woonwijk Dorpszicht',
    subTitle: 'Gemeente Voorst – Terwolde  2016',
    text: 'Ontwerp en flyermateriaal van een woonwijk voor maximaal 30 woningen, ten zuiden van het dorp Terwolde. De opgave was om op deze mooie locatie, met geluidhinder, een flexibel plan met ruimtelijke kwaliteit te creëren. Het wegenpatroon en bouwmassa’s spelen in op bestaande bebouwing en landschap; hemelwater wordt opgevangen in wadi’s. Realisatie vanaf 2018.',
    coverImage: '',
    image: ''
  },
  {
    type: [WorkType.PLANNING, WorkType.OUTSIDE],
    urlTitle: 'woningbouw-voor-particulieren',
    title: 'Woningbouw voor particulieren',
    subTitle: 'Gemeenten Borne, Doetinchem, Berg en Dal, Nijmegen, Dinkelland. 2013 – heden',
    text: 'Bezitters van een potentiële bouwkavel worden geholpen met een principeverzoek naar de gemeente, een inrichtingsplan, coördinatie van technische onderzoeken en het opstellen van een compleet bestemmingsplan of ruimtelijke onderbouwing.',
    coverImage: 'WensinkZuidGroot.jpg',
    flipbookImages: ['WensinkZuid1.jpg', 'WensinkZuid2.jpg', 'WensinkZuid3.jpg']
  },
  {
    type: [WorkType.PLANNING],
    urlTitle: 'ruimterlijke-onderbouwingen-tbv-woningen',
    title: 'Ruimtelijke Onderbouwingen - transformaties tbv woningen',
    subTitle: 'Gemeenten Arnhem, Nijmegen, Zeist, Den Haag, Nijverdal, Hengelo. 2013 – heden',
    text:
      'In samenwerking met diverse architectenbureaus, zoals Riel Berenbroek, StrategieArchitecten en HurenkampArchitecten, zijn veel Ruimtelijke Onderbouwingen opgesteld voor Omgevingsvergunningen. Veel kantoren zijn getransformeerd, vaak met kleine appartementen voor jongeren en ouderen.' +
      '\n\nVoorbeelden: Arnhem: Bergstraat, Zeelandsingel, Kroonpark, Gele Rijdersplein en Velperplein. Zeist: Utrechtseweg. Hengelo: Nieuwstraat. Den Haag: Fruitweg. Nijmegen: Tweede Oude Heselaan en Oranjesingel.',
    coverImage: '',
    image: ''
  },
  {
    type: [WorkType.URBANISM, WorkType.PLANNING, WorkType.OUTSIDE],
    urlTitle: 'supervisie-park-dekkerswald',
    title: 'Supervisie Park Dekkerswald',
    subTitle: 'Gemeente Berg en Dal, Groesbeek   2008 - 2023',
    text:
      'Vanaf de eerste ideevorming betrokken bij de transformatie van het oude zorginstituut Dekkerswald, gelegen tussen Nijmegen en Groesbeek. In circa 15 jaar vond een transformatie plaats naar een aantrekkelijk park met circa 250 woningen waar zorg naar wens wordt verleend. Met succes zijn een bestemmingsplan en een beeldkwaliteitsplan vastgesteld door de gemeenteraad. 80 % van de bebouwing op 20 ha grond wordt vervangen. Diverse inrichtingsplannen voor de publieke ruimtes zijn uitgevoerd. Belangrijke planfactoren zijn de ligging binnen een EHS-gebied, de monumenten en de gefaseerde ontwikkeling.' +
      '\n\nIn samenwerking met Fame Projectontwikkeling en OPG Landscape.',
    link: 'Magazine-100-jaar-Dekkerswald.pdf',
    linkText: 'Link naar brochure',
    coverImage: 'Dekkerswaldgroot.jpg',
    flipbookImages: ['Dekkerswald1.png', 'Dekkerswald2.png', 'Dekkerswald3.png', 'Dekkerswald4.png']
  },
  {
    type: [WorkType.PLANNING, WorkType.SAME],
    urlTitle: 'innovatiepas-kennispark',
    title: 'Innovatiepad Kennispark',
    subTitle: 'Gemeente Enschede 2016',
    text: 'Met het samenwerkingsverband ‘Innovare’ is deelgenomen aan een prijsvraag voor een innovatief pad van het NS-station naar de Universiteit Twente. Met een nieuwe visie voor het Kennispark en meerdere attractiepunten langs het pad werd een nieuw aantrekkelijk beeld geschetst. De visie was gebaseerd op twee hoofdlijnen: “Co-creatie & open innovatie”; door het actief betrekken van innovatieve stakeholders en een ‘Groene draad’. In samenwerking met Krinkels, André Bijkerk, Simon Huiskamp, Jankees Klapwijk en 100% FAT.',
    coverImage: 'Kennisparkgroot.jpg',
    flipbookImages: ['Kennispark1.jpg', 'Kennispark2.jpg', 'logo-Innovare-1.png']
  },
  {
    type: [WorkType.PLANNING, WorkType.SAME],
    urlTitle: 'plancaravan',
    title: 'PlanCaravan',
    subTitle: 'Diverse gemeenten 2014 - 2018',
    text: 'Met planoloog Tim Strikers is in diverse parken en op pleinen gesproken met genodigden en voorbijgangers. Als laagdrempelige participatie werden de bewoners van de buurt bevraagd naar de wensen en zorgen voor de leefomgeving. Schetsontwerpen werden besproken en kinderen konden zich uiten met stiften en maquettes. De ‘PlanCaravan’ met tafels en vaandels vormde een leuke uitnodiging voor een goed gesprek. Met een verslag, cartoons en videobeelden, kon de opdrachtgever plannen uitwerken of bijstellen.',
    coverImage: '',
    image: ''
  },
  {
    type: [WorkType.PLANNING, WorkType.SAME],
    urlTitle: 'buzz',
    title: 'BUZZ',
    subTitle: 'Diverse gemeenten 2015 - 2020',
    text: 'Met Koen Vrielink en Merlijn Kamp werd samengewerkt onder de naam ‘Buzz’. Hierbij werd ingezet op het ontwikkelen van insectenboerderijen om de leegstand van agrarische panden tegen te gaan en ten gunste van een circulaire economie. Door een netwerk van specialisten kon op diverse vragen antwoord gegeven worden (bedrijfskundig, financieel, ecologisch, ruimtelijk en planologisch).',
    link: 'flyer-buzz-150118.pdf',
    linkText: 'Link naar brochure',
    coverImage: 'buzzgroot.jpg',
    image: 'buzzklein.jpg'
  },
  {
    type: [WorkType.OUTSIDE],
    urlTitle: 'straatmeubilair',
    title: 'Straatmeubilair',
    subTitle: 'Diverse gemeenten',
    text: 'Het straatmeubilair kan de bekroning zijn van een herinrichting van de buitenruimte. Zo kreeg de Veerstoep van de IJssel in Dieren-Zuid een nieuwe uitkijkpost over de IJssel. En het kantoor van ZZG-zorggroep op Park Dekkerswald een aangename lunchplek.',
    coverImage: 'Veerstoepgroot.jpg',
    flipbookImages: ['Veerstoep1.png', 'Veerstoep2.png', 'Veerstoep3.png', 'Veerstoep4.png']
  },
  {
    type: [WorkType.PLANNING],
    urlTitle: 'actualisatie-bestemmingsplannen',
    title: 'Actualisatie bestemmingsplannen',
    subTitle: 'Gemeenten Rheden. 2004 - 2007',
    text: 'De gemeente Rheden was één van eerste gemeenten van Nederland die overgingen op een standaardisatie van bestemmingsplannen. Circa 160 verouderde bestemmingsplannen werden vervangen door 11 digitaal raadpleegbare plannen. Als stedebouwkundige van de gemeente bijgedragen aan een eenduidige tekenwijze, redactie van de plannen en heldere communicatie.',
    coverImage: '',
    image: ''
  },
  {
    type: [WorkType.PLANNING],
    urlTitle: 'structuurvisie-een-droom-om-in-te-wonen',
    title: 'Structuurvisie ‘Een droom om in te wonen’.',
    subTitle: 'Gemeente Rheden. 2007',
    text: 'Na een lang communicatietraject is in 2007 de structuurvisie voor de gemeente Rheden door de gemeenteraad vastgesteld. Uiteindelijk werden keuzes gemaakt die onder andere van belang waren voor de actualisatie van de bestemmingsplannen, diverse invulprojecten en grote infrastructurele werken, zoals de Traverse Dieren. De visie met het accent op het ‘wonen’ kon in eigen beheer door collega’s bij de gemeente worden opgesteld en vormgegeven.',
    coverImage: '',
    image: ''
  },
  {
    type: [WorkType.SAME],
    urlTitle: 'popup-store-momo',
    title: 'Pop-up store MOMO',
    subTitle: 'Hengelo. 2013-2014',
    text: 'Met Natascha Vos, Agnes Booijink en diverse hulpkrachten werd 9 maanden een tijdelijke winkel opengehouden in de binnenstad van Hengelo, Marktstraat 15. Naast verkoop van 2e-hands design en retro-materiaal werden er cursussen en optredens gegeven. Met het project werd een experiment gedaan om meer reuring in de binnenstad te brengen en een andere manier van winkelvoering.',
    coverImage: '',
    image: ''
  },
  {
    type: [WorkType.SAME],
    urlTitle: 'kunstmoment-landschatten',
    title: 'Kunstmoment -Landschatten-',
    subTitle: 'Diepenheim  217',
    text: 'Met fotograaf-kunstenaar Agnes Booijink deelgenomen aan ‘Het Kunstmoment’ met als thema ‘Landschatten’ van de ‘Kunstvereniging Diepenheim’. Het rosarium in het centrum vormde de inspiratie om drie locaties te verfraaien. In het centrum van de stad was een feest gemaakt van een grote tafel. Op het Schuttersveld stond een installatie van een huiselijk tafereel met tafel en stoelen. Zijn we binnen of buiten? Waar eindigt de natuur en begint de cultuur? In het open veld lagen 60 rozen in het gras, als breekbare aankondiging van het culturele leven. Het ‘mooimaken’ is een oude Twentse traditie.',
    coverImage: '',
    image: ''
  },
  {
    type: [WorkType.PLANNING],
    urlTitle: 'bestemmingsplan-landgoed-op-den-bult',
    title: 'Bestemmingsplan Landgoed op den Bult',
    subTitle: 'Gemeente Dinkelland – Deurningen  2017',
    text: 'In opdracht van de horecaonderneming Frans op den Bult is een bestemmingsplan opgesteld voor het achterliggende bosperceel. Naar ontwerp van landschapsarchitect André Bijkerk is in 2018 een park met extra parkeren gerealiseerd.',
    coverImage: '',
    image: ''
  },
  {
    type: [WorkType.OUTSIDE],
    urlTitle: 'speelplaats-basisscholen-de-blinkert-de-kringloop',
    title: 'Speelplaats basisscholen De Blinkert – De Kringloop',
    subTitle: 'Arnhem 2006',
    text: 'Als ouder van twee schoolkinderen het schoolplein ontworpen en de uitvoering begeleid.',
    coverImage: '',
    image: ''
  },
  {
    type: [WorkType.OUTSIDE],
    urlTitle: 'buitenruimte-insula-dei',
    title: 'Buitenruimte Insula Dei',
    subTitle: 'Arnhem 2009',
    text: 'Als stedebouwkundige verantwoordelijk voor het ontwerp en uitvoeringsbegeleiding van de buitenruimtes van de gebouwen van Insula Dei. Drie pleinen en een parkeerplaats ondergingen een metamorfose. De hoogteverschillen in het terrein en de diversiteit van de gebouwen vormden een uitdaging. In samenwerking met Harm Post.',
    coverImage: '',
    image: ''
  },
  {
    type: [WorkType.URBANISM, WorkType.PLANNING, WorkType.OUTSIDE],
    urlTitle: 'erftransformaties-voor-woningbouw',
    title: 'Erftransformaties voor woningbouw',
    subTitle: 'Diverse gemeenten  2013 – heden',
    text:
      'Voor verschillende bedrijven met veel ruimte zijn erftransformaties ontworpen. Het karakter van de plek bleef gespaard of werd juist versterkt, terwijl er ruimte kwam voor nieuwe woningen. Een inrichtings- en beeldkwaliteitsplan horen standaard bij het plan.' +
      '\n\nVoorbeelden: Warnsveld: Lochemseweg. Nijmegen: Wolfskuilseweg. Doetinchem: Lubberslaan.’ Keijenborg: Sint Janstraat.',
    coverImage: '',
    image: ''
  }
]
