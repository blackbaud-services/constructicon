/**
 * Sizing and Rhythm
 */
export const rhythm = (value = 1, unit = 'rem', basis = 1.5) =>
  Array.isArray(value)
    ? value.map(v => `${basis * v}${unit}`).join(' ')
    : `${basis * value}${unit}`

export const scale = (exponent = 0, scale = 1.2) =>
  `${Math.pow(scale, exponent)}rem`

/**
 * Colors
 */
export const colors = {
  light: '#ffffff',
  dark: '#252b33',
  grey: '#818b99',
  lightGrey: '#e5e5e5',
  paleGrey: '#f5f5f5',
  primary: '#1667d9',
  secondary: '#7a04dd',
  tertiary: '#540099',
  shade: 'rgba(0, 0, 0, 0.125)',
  tint: 'rgba(255, 255, 255, 0.25)',
  transparent: 'transparent',
  darkPurple: '#540099',
  violet: '#b061f2',
  softPurple: '#e3c2ff',
  rose: '#ffb2be',
  yellow: '#fecb34',
  neonOrange: '#ff4b00',
  teal: '#00cea3',
  blue: '#1667d9',
  skinTone1: '#f5d7cd',
  skinTone3: '#f2cdae',
  skinTone5: '#b58a7c',
  skinTone7: '#603839',
  skinTone2: '#eaada4',
  skinTone4: '#f2bd9e',
  skinTone6: '#784f44',
  skinTone8: '#77311d',
  inherit: 'inherit',
  facebook: '#1877f2',
  twitter: '#1da1f2',
  instagram: '#e4405f',
  youtube: '#ff0000',
  linkedin: '#0077b5',
  google: '#4285f4',
  vimeo: '#1ab7ea',
  fitbit: '#00b0b9',
  mapmyfitness: '#004a8d',
  strava: '#fc4c02',
  twitch: '#6701B3',
  eventbrite: '#f05537',
  slack: '#4a154b',
  whatsapp: '#25d366',
  pinterest: '#e60023',
  messenger: '#006aff',
  reddit: '#ff4500',
  danger: '#d9534f',
  success: '#5cb85c',
  blackbaud: '#8cbe4f',
  everydayhero: '#1bab6b',
  justgiving: '#7a04dd',
  tumblr: '#36465d',
  snapchat: '#fffc00',
  nextdoor: '#93D500'
}

/**
 * Fonts
 */
export const fonts = {
  head: 'Inter, sans-serif',
  body: 'Inter, sans-serif'
}

export const measures = {
  medium: 1.5
}

export const treatments = {
  head: {
    fontFamily: fonts.head,
    fontWeight: 800,
    letterSpacing: '-0.02em'
  },
  body: {
    fontFamily: fonts.body
  },
  button: {
    fontFamily: fonts.head,
    fontWeight: 500
  },
  input: {
    fontFamily: fonts.body
  },
  container: {
    maxWidth: rhythm(40)
  }
}

/**
 * Default background styles
 */
export const background = (url, size = 'cover') => ({
  backgroundImage: !!url && `url('${url}')`,
  backgroundSize: size,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center'
})

/**
 * Borders and Edges
 */
export const shadows = {
  none: 'none',
  light: '0 0 15px rgba(0, 0, 0, 0.125)'
}

export const radiuses = {
  none: 0,
  small: 0.175,
  medium: 0.25,
  large: 50
}

/**
 * Media Queries
 */
export const breakpoints = {
  xs: '24rem',
  sm: '36rem',
  md: '48rem',
  lg: '60rem',
  xl: '72rem'
}

export const mediaQuery = (size = 'sm', query = 'min-width') =>
  `@media (${query}: ${breakpoints[size]})`

/**
 * Effects, Animations, Transitions, Utils
 */
export const transitions = {
  easeOut: 'ease-out .25s'
}

export const utils = {
  fullSize: {
    position: 'absolute',
    content: '""',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
}

export const effects = {
  none: {},
  shade: {
    position: 'relative',
    '&:before': {
      transition: transitions.easeOut,
      ...utils.fullSize,
      backgroundColor: colors.shade,
      opacity: 0
    },
    '&:hover:before, &:focus:before': {
      opacity: 1
    }
  },
  tint: {
    position: 'relative',
    '&:before': {
      transition: transitions.easeOut,
      ...utils.fullSize,
      backgroundColor: colors.tint,
      opacity: 0
    },
    '&:hover:before, &:focus:before': {
      opacity: 1
    }
  },
  grow: {
    transition: transitions.easeOut,
    backfaceVisibility: 'hidden',
    '&:hover, &:focus': {
      transform: 'scale(1.1)'
    }
  },
  shrink: {
    transition: transitions.easeOut,
    backfaceVisibility: 'hidden',
    '&:hover, &:focus': {
      transform: 'scale(0.925)'
    }
  }
}

/**
 * Flexbox justifyContent style polyfill
 */
export const justifyContent = value => {
  const flexPack = {
    'flex-start': 'start',
    'flex-end': 'end',
    'space-between': 'justify',
    'space-around': 'distribute',
    center: 'center'
  }

  return {
    justifyContent: value,
    flexPack: flexPack[value]
  }
}

/**
 * Spacing - for handling spacing objects i.e. padding/margin props
 * e.g. { x: 1, y: 2 } or { l: 1, t: 2 } or 5 etc.
 */

export const calculateSpacing = (spacing, type = 'padding', args = {}) => {
  const defaultOptions = {
    multiplier: 1
  }

  const options = {
    ...defaultOptions,
    ...args
  }

  switch (typeof spacing) {
    case 'number':
      return {
        [type]: rhythm(
          spacing * options.multiplier,
          options.unit,
          options.basis
        )
      }
    case 'object':
      return Object.keys(spacing).reduce(
        (styles, direction) => ({
          ...styles,
          ...spacingDirection(direction, spacing[direction], type, options)
        }),
        {}
      )
    default:
      return {}
  }
}

const spacingDirection = (direction, space, type, options) => {
  const map = {
    t: ['Top'],
    r: ['Right'],
    b: ['Bottom'],
    l: ['Left'],
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom']
  }

  const fields = map[direction] || []

  const styles = fields.reduce(
    (styles, property) => ({
      ...styles,
      [`${type}${property}`]: rhythm(
        space * options.multiplier,
        options.unit,
        options.basis
      )
    }),
    {}
  )

  return styles
}
