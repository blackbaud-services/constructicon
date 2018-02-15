import merge from 'lodash/merge'

export default ({
  invalid,
  readOnly,
  styles,
  touched
}, {
  colors,
  radiuses,
  rhythm,
  scale,
  shadows,
  treatments
}) => {
  const isInvalid = touched && invalid

  const baseStyles = {
    root: {
      position: 'relative'
    },

    fieldWrapper: {
      position: 'relative'
    },

    field: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      backgroundColor: colors.light,
      color: readOnly ? colors.lightGrey : colors.dark,
      padding: `${rhythm(0.125)} ${rhythm(0.333)}`,
      height: rhythm(1.666),
      border: `thin solid ${isInvalid ? colors.danger : colors.lightGrey}`,
      boxShadow: isInvalid ? `0 0 5px ${colors.danger}` : 'none',
      borderRadius: rhythm(radiuses.small),
      ...treatments.input,

      ':focus': {
        borderColor: isInvalid ? colors.danger : colors.secondary
      }
    },

    selected: {
      position: 'absolute',
      display: 'flex',
      alignItems: 'stretch',
      left: rhythm(0.175),
      top: rhythm(0.175),
      bottom: rhythm(0.175),
      maxWidth: `calc(100% - ${rhythm(0.35)})`,
      backgroundColor: colors.primary,
      color: colors.light,
      borderRadius: rhythm(radiuses.small),
      fontSize: scale(-1),
      overflow: 'hidden'
    },

    selectedLabel: {
      display: 'flex',
      alignItems: 'center',
      padding: `${rhythm(0.25)} ${rhythm(0.5)}`,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },

    selectedClose: {
      flex: `0 0 ${rhythm(0.75)}`,
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      padding: rhythm(0.25),
      backgroundColor: colors.shade
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
