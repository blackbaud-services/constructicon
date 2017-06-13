import merge from 'lodash/merge'

export default (props, traits) => {
  const {
    colors,
    fonts,
    measures,
    radiuses,
    rhythm,
    scale,
    treatments
  } = traits

  const { styles } = props

  const invalid = props.touched && props.invalid

  const baseStyles = {
    root: {
      display: 'block',
      position: 'relative',
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
      'a': {
        color: colors.primary,
        textDecoration: 'underline'
      }
    },

    required: {
      display: 'inline-block',
      color: colors.danger
    },

    field: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      backgroundColor: colors.light,
      height: rhythm(1.666),
      border: `thin solid ${invalid ? colors.danger : colors.lightGrey}`,
      boxShadow: invalid && `0 0 5px ${colors.danger}`,
      borderRadius: rhythm(radiuses.small),
      ...treatments.input,
      ...styles,

      ':focus': {
        borderColor: invalid ? colors.danger : colors.secondary,
        boxShadow: `0 0 5px ${invalid ? colors.danger : colors.secondary}`
      }
    },

    error: {
      fontSize: scale(-0.75),
      fontWeight: 700,
      marginTop: rhythm(0.5),
      color: colors.danger
    }
  }

  return merge(baseStyles, props.styles)
}
