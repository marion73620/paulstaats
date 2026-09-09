// @ts-expect-error - vuetify private internal path is not typed
import colors from 'vuetify/lib/util/colors'
import '@mdi/font/css/materialdesignicons.css'

const yellow = '#ffcc04'

export default {
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: yellow,
          text: colors.shades.black,
          background: colors.shades.white
        }
      },
      dark: {
        dark: true,
        colors: {
          primary: yellow,
          text: colors.shades.white,
          background: colors.grey.darken4
        }
      }
    }
  }
}
