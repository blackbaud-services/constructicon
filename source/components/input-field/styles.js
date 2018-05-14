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
      padding: rhythm([0.125, 0.333]),
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
    }
  }

  return merge(defaultStyles, styles)
}
