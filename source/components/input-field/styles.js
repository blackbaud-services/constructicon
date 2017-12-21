import merge from 'lodash/merge'

export default ({
  type,
  touched,
  invalid,
  readOnly,
  styles
}, {
  colors,
  fonts,
  measures,
  radiuses,
  rhythm,
  scale,
  treatments
}) => {
  const checkbox = type === 'checkbox' || type === 'radio'
  const textarea = type === 'textarea'
  const isInvalid = touched && invalid

  const defaultStyles = {
    root: {
      display: 'block',
      position: 'relative',
      paddingLeft: checkbox ? rhythm(1) : '0',
      fontFamily: fonts.body,
      textAlign: 'left',
      marginBottom: rhythm(1)
    },

    label: {
      display: 'block',
      fontWeight: 700,
      fontSize: scale(-0.5),
      lineHeight: measures.medium,
      textAlign: 'left',
      marginBottom: rhythm(0.25),

      a: {
        color: colors.primary,
        textDecoration: 'underline'
      }
    },

    required: {
      display: 'inline-block',
      color: colors.danger
    },

    field: checkbox ? {
      position: 'absolute',
      top: rhythm(0.125),
      left: 0
    } : {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      backgroundColor: colors.light,
      color: readOnly ? colors.lightGrey : colors.dark,
      padding: `${rhythm(0.125)} ${rhythm(0.333)}`,
      height: textarea ? 'auto' : rhythm(1.666),
      minHeight: textarea && rhythm(4),
      maxHeight: textarea && rhythm(10),
      border: `thin solid ${isInvalid ? colors.danger : colors.lightGrey}`,
      boxShadow: isInvalid ? `0 0 5px ${colors.danger}` : 'none',
      borderRadius: rhythm(radiuses.small),
      ...treatments.input,

      ':focus': {
        borderColor: isInvalid ? colors.danger : colors.secondary,
        boxShadow: `0 0 5px ${isInvalid ? colors.danger : colors.secondary}`
      }
    },

    error: {
      fontSize: scale(-0.75),
      fontWeight: 700,
      marginTop: rhythm(0.5),
      color: colors.danger
    }
  }

  return merge(defaultStyles, styles)
}
