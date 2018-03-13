/**
* Sizing and Rhythm
*/
const rhythm = (value = 1, unit = 'rem', basis = 1.5) => (
  `${basis * value}${unit}`
)

const scale = (exponent = 0, scale = 1.2) => (
  `${Math.pow(scale, exponent)}rem`
)

/**
* Colors
*/
const colors = {
  light: '#fff',
  dark: '#000',
  grey: '#7a898f',
  lightGrey: '#aec0c6',
  paleGrey: '#ebf1f3',
  primary: '#1bab6b',
  secondary: '#ad29b6',
  tertiary: '#203a44',
  shade: 'rgba(0, 0, 0, 0.125)',
  tint: 'rgba(255, 255, 255, 0.25)',
  transparent: 'transparent',
  facebook: '#3b5999',
  twitter: '#55acee',
  instagram: '#e4405f',
  youtube: '#cd201f',
  linkedin: '#0084bf',
  google: '#dd4b39',
  vimeo: '#1ab7ea',
  fitbit: '#00b0b9',
  mapmyfitness: '#004a8d',
  strava: '#fc4c02',
  danger: '#d9534f',
  success: '#5cb85c'
}

/**
* Fonts
*/
const fonts = {
  head: '"Open Sans", sans-serif',
  body: '"Open Sans", sans-serif'
}

const measures = {
  medium: 1.5
}

const treatments = {
  head: {
    fontFamily: fonts.head,
    fontWeight: 700
  },
  body: {
    fontFamily: fonts.body
  },
  button: {
    fontFamily: fonts.head,
    textTransform: 'uppercase',
    fontWeight: 700
  },
  input: {
    fontFamily: fonts.body
  },
  container: {
    maxWidth: rhythm(40)
  }
}

/**
* Borders and Edges
*/
const shadows = {
  none: 'none',
  light: '0 0 15px rgba(0, 0, 0, 0.125)'
}

const radiuses = {
  none: 0,
  small: 0.25,
  medium: 0.5,
  large: 50
}

/**
* Media Queries
*/
const breakpoints = {
  sm: '32.5em',
  md: '45em',
  lg: '57.5em'
}

const mediaQuery = (size = 'sm', query = 'min-width') => (
  `@media (${query}: ${breakpoints[size]})`
)

/**
* Effects, Animations, Transitions, Utils
*/
const transitions = {
  easeOut: 'ease-out .25s'
}

const utils = {
  fullSize: {
    position: 'absolute',
    content: '',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
}

const effects = {
  none: {},
  shade: {
    position: 'relative',
    ':before': {
      transition: transitions.easeOut,
      ...utils.fullSize,
      backgroundColor: colors.shade,
      opacity: 0
    },
    ':hover:before': {
      opacity: 1
    }
  },
  tint: {
    position: 'relative',
    ':before': {
      transition: transitions.easeOut,
      ...utils.fullSize,
      backgroundColor: colors.tint,
      opacity: 0
    },
    ':hover:before': {
      opacity: 1
    }
  },
  grow: {
    transition: transitions.easeOut,
    backfaceVisibility: 'hidden',
    ':hover': {
      transform: 'scale(1.1)'
    }
  },
  shrink: {
    transition: transitions.easeOut,
    backfaceVisibility: 'hidden',
    ':hover': {
      transform: 'scale(0.925)'
    }
  }
}

/**
* Flexbox justifyContent style polyfill
*/
const justifyContent = (value) => {
  const flexPack = {
    'flex-start': 'start',
    'flex-end': 'end',
    'space-between': 'justify',
    'space-around': 'distribute',
    'center': 'center'
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

const calculateSpacing = (spacing, type = 'padding', args = {}) => {
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
        [type]: rhythm(spacing * options.multiplier, options.unit, options.basis)
      }
    case 'object':
      return Object.keys(spacing).reduce((styles, direction) => ({
        ...styles,
        ...spacingDirection(direction, spacing[direction], type, options)
      }), {})
    default:
      return {}
  }
}

const spacingDirection = (direction, space, type, options) => {
  const map = {
    t: [ 'Top' ],
    r: [ 'Right' ],
    b: [ 'Bottom' ],
    l: [ 'Left' ],
    x: [ 'Left', 'Right' ],
    y: [ 'Top', 'Bottom' ]
  }

  const fields = map[direction] || []

  const styles = fields.reduce((styles, property) => ({
    ...styles,
    [`${type}${property}`]: rhythm(space * options.multiplier, options.unit, options.basis)
  }), {})

  return styles
}

module.exports = {
  breakpoints,
  calculateSpacing,
  colors,
  effects,
  fonts,
  justifyContent,
  measures,
  mediaQuery,
  radiuses,
  rhythm,
  scale,
  shadows,
  transitions,
  treatments,
  utils
}
