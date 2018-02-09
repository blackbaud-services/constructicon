import merge from 'lodash/merge'

export default ({
  styles
}, {
  colors,
  rhythm,
  scale,
  shadows
}) => {
  const baseStyles = {
    root: {
      position: 'relative'
    },

    results: {
      position: 'absolute',
      zIndex: 6,
      maxHeight: rhythm(12),
      overflow: 'auto',
      top: '100%',
      left: 0,
      right: 0,
      backgroundColor: colors.light,
      color: colors.dark,
      boxShadow: shadows.light
    },

    status: {
      padding: rhythm(1),
      textAlign: 'center',
      fontSize: scale(-1),
      opacity: 0.5
    },

    showMore: {
      padding: rhythm(0.5),
      textAlign: 'center',
      fontSize: scale(-1),
      fontWeight: 500,
      cursor: 'pointer',

      ':hover': {
        backgroundColor: colors.primary,
        color: colors.light
      }
    }
  }

  return merge(baseStyles, styles)
}
