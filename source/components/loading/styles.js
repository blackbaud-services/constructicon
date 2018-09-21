import merge from 'lodash/merge'

export default (
  { color, size, duration, styles },
  { colors, rhythm },
  keyframes
) => {
  const dotSize = size / 2

  const defaultStyles = {
    root: {
      display: 'inline-block',
      height: rhythm(dotSize),
      textAlign: 'center'
    },

    dot: {
      position: 'relative',
      display: 'inline-block',
      verticalAlign: 'top',
      margin: `auto ${rhythm(dotSize / 3)}`,
      width: rhythm(dotSize),
      height: rhythm(dotSize),
      backgroundColor: colors[color],
      lineHeight: 0,
      borderRadius: '50%',
      transformOrigin: 'bottom',
      animation: `${keyframes.dots} infinite alternate`,
      animationDuration: `${duration}ms`,

      '&:nth-of-type(2)': {
        animationDelay: '200ms'
      },

      '&:nth-of-type(3)': {
        animationDelay: '400ms'
      }
    }
  }

  return merge(defaultStyles, styles)
}

export const keyframes = {
  dots: {
    '0%': {
      opacity: 0.1,
      transform: 'scale(0.75)'
    },
    '100%': {
      opacity: 0.9,
      transform: 'scale(1)'
    }
  }
}
