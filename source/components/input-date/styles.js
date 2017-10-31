import merge from 'lodash/merge'

export default (props, traits) => {
  const {
    colors,
    fonts,
    measures,
    radiuses,
    rhythm,
    scale
  } = traits

  const {
    type,
    spacing = 0.5
  } = props

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

    error: {
      fontSize: scale(-0.75),
      fontWeight: 700,
      marginTop: rhythm(0.5),
      color: colors.danger
    },

    wrapper: {
      display: 'flex',
      flexWrap: 'nowrap',
      marginLeft: rhythm(-spacing)
    },

    input: {
      root: {
        marginBottom: 0,
        marginLeft: rhythm(spacing)
      },
      label: {
        display: 'none'
      }
    }
  }

  return merge(baseStyles, props.styles)
}
