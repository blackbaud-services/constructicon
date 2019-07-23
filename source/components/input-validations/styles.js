import merge from 'lodash/merge'

export default ({ styles }, { colors, scale, rhythm, treatments }) => {
  const defaultStyles = {
    root: {
      fontSize: scale(-0.75),
      fontWeight: 700,
      color: colors.danger,
      ...treatments.inputValidations
    },

    error: {
      marginTop: rhythm(0.5),
      ...treatments.inputValidation
    }
  }

  return merge(defaultStyles, styles)
}
