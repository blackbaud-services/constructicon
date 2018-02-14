import merge from 'lodash/merge'

export default ({
  styles
}, {
  colors,
  scale,
  rhythm
}) => {
  const defaultStyles = {
    root: {
      fontSize: scale(-0.75),
      fontWeight: 700,
      color: colors.danger
    },

    error: {
      marginTop: rhythm(0.5)
    }
  }

  return merge(defaultStyles, styles)
}
