import merge from 'lodash/merge'

export default (props, traits, keyframes) => {
  const { isDisabled, isLoading, styles } = props
  const { colors, radiuses, rhythm, treatments } = traits
  const isInactive = isDisabled || isLoading

  const defaultStyles = {
    root: {
      display: 'block',
      margin: 'auto',
      paddingBottom: rhythm(1.5),
      ...treatments.form
    },

    fields: {
      opacity: isLoading && 0.3,
      pointerEvents: isLoading && 'none'
    },

    error: {
      margin: rhythm([1, 0]),
      padding: rhythm([0.5, 0.75]),
      backgroundColor: colors.danger,
      fontWeight: 'bold',
      color: colors.light,
      borderRadius: rhythm(radiuses.small),
      ...treatments.formError,

      '& p + p': {
        marginTop: rhythm(0.666)
      },

      '& a': {
        color: colors.tertiary
      }
    },

    action: {
      backgroundColor: colors.transparent,
      color: colors.primary,
      ...treatments.formAction
    },

    submit: {
      opacity: isInactive ? '0.3 !important' : 0.85,
      paddingLeft: rhythm(1.25),
      paddingRight: rhythm(1.25),
      transition: 'all 250ms ease',

      '&:focus': {
        opacity: isInactive ? '0.3 !important' : 1,
        boxShadow: `0 0 15px 1px rgba(0, 0, 0, 0.25)`
      },

      '&:active': {
        opacity: isInactive ? '0.3 !important' : 1,
        boxShadow: `inset 0 0 15px 1px rgba(0, 0, 0, 0.25)`
      },

      '&:hover': {
        opacity: isInactive ? '0.3 !important' : 1,
        cursor: isInactive ? 'default' : 'pointer',
        pointerEvents: isInactive ? 'none' : 'all'
      },

      '&:after': {
        content: '""',
        display: isLoading ? 'inline-block' : 'none',
        width: rhythm(0.75),
        height: rhythm(0.75),
        marginLeft: rhythm(0.5),
        marginRight: rhythm(-0.5),
        borderRadius: '50%',
        border: '2px solid transparent',
        borderRightColor: colors.light,
        textIndent: '-9999px',
        overflow: 'hidden',
        animation: `${keyframes.spin} 1s linear infinite`
      },

      ...treatments.formSubmit
    },

    icon: {
      display: isLoading && 'none'
    }
  }

  return merge(defaultStyles, styles)
}

export const keyframes = {
  spin: {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '100%': {
      transform: 'rotate(360deg)'
    }
  }
}
