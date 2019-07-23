import merge from 'lodash/merge'

export default (
  { invalid, readOnly, styles, touched, value },
  { colors, fonts, radiuses, rhythm, scale, shadows, treatments }
) => {
  const isInvalid = touched && invalid

  const baseStyles = {
    root: {
      display: 'block',
      position: 'relative',
      fontFamily: fonts.body,
      textAlign: 'left',
      marginBottom: rhythm(1),
      ...treatments.inputRoot
    },

    fieldWrapper: {
      position: 'relative'
    },

    field: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      overflow: 'hidden',
      backgroundColor: colors.light,
      color: readOnly ? colors.lightGrey : colors.dark,
      padding: rhythm([0.125, 0.333]),
      paddingRight: rhythm(1.5),
      height: rhythm(1.666),
      border: `thin solid ${isInvalid ? colors.danger : colors.lightGrey}`,
      boxShadow: isInvalid ? `0 0 5px ${colors.danger}` : 'none',
      borderRadius: rhythm(radiuses.small),
      textIndent: value && '-99999px',
      ...treatments.input,

      '&:focus': {
        borderColor: isInvalid ? colors.danger : colors.secondary,
        boxShadow: `0 0 5px ${isInvalid ? colors.danger : colors.secondary}`
      }
    },

    icon: {
      position: 'absolute',
      right: rhythm(0.5),
      top: '50%',
      transform: 'translateY(-50%)',
      cursor: value && 'pointer'
    },

    selected: {
      position: 'absolute',
      left: rhythm(0.5),
      right: rhythm(1.5),
      top: '50%',
      transform: 'translateY(-50%)',
      cursor: 'pointer'
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
      display: 'block',
      width: '100%',
      padding: rhythm(0.5),
      textAlign: 'center',
      fontSize: scale(-0.5),
      cursor: 'pointer',
      backgroundColor: colors.paleGrey,

      '&:hover': {
        backgroundColor: colors.primary,
        color: colors.light
      }
    }
  }

  return merge(baseStyles, styles)
}
