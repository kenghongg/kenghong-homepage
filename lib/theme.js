import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#F3F4FA', '#202023')(props)
    },
    '.title-highlight::after': {
      content: '""',
      background: 'rgba(33, 150, 243, 0.3)',
      position: 'absolute',
      display: 'block',
      width: '80%',
      height: 2,
      bottom: 1,
      left: 0,
      borderRadius: 24
    },
    '.title-highlight::before': {
      content: '""',
      background: 'rgba(33, 150, 243, 0.2)',
      position: 'absolute',
      display: 'block',
      width: '50%',
      height: 2,
      bottom: 5,
      left: 0,
      borderRadius: 24
    }
  })
}

const components = {
  Heading: {
    variants: {
      'page-title': {
        position: 'relative',
        display: 'inline-block'
      },
      'section-title': {
        // textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
        position: 'relative'
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  grassTeal: '#BDE6F7',
  kashmirBlue: '#55698e'
}

const colorScheme = {
  grassTeal: '#BDE6F7',
  kashmirBlue: '#55698e'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
