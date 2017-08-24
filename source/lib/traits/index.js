/**
* Sizing and Rhythm
*/
export const rhythm = (value = 1, unit = 'rem', basis = 1.5) => (
  `${basis * value}${unit}`
)

export const scale = (exponent = 0, scale = 1.2) => (
  `${Math.pow(scale, exponent)}rem`
)

/**
* Colors
*/
export const colors = {
  light: '#fff',
  dark: '#000',
  grey: '#777',
  lightGrey: '#bbb',
  primary: '#42AA4C',
  secondary: '#096010',
  tertiary: '#585858',
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
export const fonts = {
  head: '"Open Sans", sans-serif',
  body: '"Open Sans", sans-serif'
}

export const measures = {
  medium: 1.5
}

export const treatments = {
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
export const shadows = {
  none: 'none',
  light: '0 0 15px rgba(0, 0, 0, 0.125)'
}

export const radiuses = {
  none: 0,
  small: 0.25,
  medium: 0.5,
  large: 50
}

/**
* Media Queries
*/
export const breakpoints = {
  sm: '32.5em',
  md: '45em',
  lg: '57.5em'
}

export const mediaQuery = (size = 'sm', query = 'min-width') => (
  `@media (${query}: ${breakpoints[size]})`
)

/**
* Effects, Animations, Transitions, Utils
*/
export const transitions = {
  easeOut: 'ease-out .25s'
}

export const utils = {
  fullSize: {
    position: 'absolute',
    content: '',
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
