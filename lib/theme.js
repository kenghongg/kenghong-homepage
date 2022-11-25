import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#F3F4FA', '#202023')(props)
    },
    '.brush-title::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: -8,
      width: 274,
      height: '100%',
      backgroundImage: 'url("/images/contents/brush-title.svg")',
      backgroundRepeat: 'no-repeat',
      zIndex: '-1'
    },
    '.brush-list::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: -8,
      width: 126,
      height: '100%',
      backgroundImage: 'url("/images/contents/brush-list.svg")',
      backgroundRepeat: 'no-repeat',
      zIndex: '-1'
    },
    '.title-highlight::after': {
      content: '""',
      background: mode('rgba(33, 150, 243, 0.3)', 'rgba(144, 205, 244, 0.3)')(props),
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
      background: mode('rgba(33, 150, 243, 0.2)', 'rgba(144, 205, 244, 0.2)')(props),
      position: 'absolute',
      display: 'block',
      width: '50%',
      height: 2,
      bottom: 5,
      left: 0,
      borderRadius: 24
    },
    '.portfolio-btn': {
      position: 'relative',
      // padding: '30px 60px',
      // boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.4)',
      // color: '#999',
      textDecoration: 'none',
      // textTransform: 'uppercase',
      // letterSpacing: '4px',
      fontSize: 30,
      // font: '700 30px consolas',
      // backgroundColor: 'rgba(226, 232, 240, 0.4) !important',
      overflow: 'hidden',
      backgroundColor: 'rgba(33, 150, 243, 0.2) !important'
    },
    '.portfolio-btn span:nth-child(1)': {
      position: 'absolute',
      top: '0px',
      right: '0px',
      width: '100%',
      height: '3px',
      background: 'linear-gradient(to right, rgba(37, 68, 99, 0.7), rgba(186, 216, 249, 0.7))',
      animation: 'animate1 2s linear infinite'
    },
    '@keyframes animate1': {
      '0%': {
        transform: 'translateX(-100%)'
      },
      '100%': {
        transform: 'translateX(100%)'
      }
    },
    '.portfolio-btn span:nth-child(2)': {
      position: 'absolute',
      top: '0px',
      right: '0px',
      height: '100%',
      width: '3px',
      background: 'linear-gradient(to bottom, rgba(37, 68, 99, 0.7), rgba(186, 216, 249, 0.7))',
      animation: 'animate2 2s linear infinite',
      animationDelay: '1s'
    },
    '@keyframes animate2': {
      '0%': {
        transform: 'translateY(-100%)'
      },
      '100%': {
        transform: 'translateY(100%)'
      }
    },
    '.portfolio-btn span:nth-child(3)': {
      position: 'absolute',
      bottom: '0px',
      right: '0px',
      width: '100%',
      height: '3px',
      background: 'linear-gradient(to left, rgba(37, 68, 99, 0.7), rgba(186, 216, 249, 0.7))',
      animation: 'animate3 2s linear infinite'
    },
    '@keyframes animate3': {
      '0%': {
        transform: 'translateX(100%)'
      },
      '100%': {
        transform: 'translateX(-100%)'
      }
    },
    '.portfolio-btn span:nth-child(4)': {
      position: 'absolute',
      top: '0px',
      left: '0px',
      height: '100%',
      width: '3px',
      background: 'linear-gradient(to top, rgba(37, 68, 99, 0.7), rgba(186, 216, 249, 0.7))',
      animation: 'animate4 2s linear infinite',
      animationDelay: '1s'
    },
    '@keyframes animate4': {
      '0%': {
        transform: 'translateY(100%)'
      },
      '100%': {
        transform: 'translateY(-100%)'
      }
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
  initialColorMode: 'light',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
