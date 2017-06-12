import merge from 'lodash/merge'

export default (props, traits) => {
  const {
    colors,
    radiuses,
    rhythm
  } = traits

  const { isLoading, isDisabled } = props
  const isInactive = isDisabled || isLoading

  const baseStyles = {
    form: {
      display: 'block',
      margin: 'auto',
      paddingBottom: rhythm(1.5)
    },

    fields: {
      opacity: isLoading && 0.3,
      pointerEvents: isLoading && 'none'
    },

    error: {
      margin: `${rhythm(1)} 0`,
      padding: `${rhythm(0.5)} ${rhythm(0.75)}`,
      backgroundColor: colors.red,
      fontWeight: 'bold',
      color: colors.light,
      borderRadius: rhythm(radiuses.small),
      'p + p': {
        marginTop: rhythm(0.666)
      },
      a: {
        color: colors.tertiary
      }
    },

    notice: {
      backgroundColor: colors.light,
      color: colors.dark,
      padding: `${rhythm(1)} ${rhythm(0.75)}`,
      fontWeight: 'normal'
    },

    submit: {
      margin: 'auto',
      opacity: isInactive ? '0.3 !important' : 0.85,
      transition: 'all 250ms ease',
      ':focus': {
        opacity: isInactive ? '0.3 !important' : 1,
        boxShadow: `0 0 15px 1px rgba(0, 0, 0, 0.25)`
      },
      ':active': {
        opacity: isInactive ? '0.3 !important' : 1,
        boxShadow: `inset 0 0 15px 1px rgba(0, 0, 0, 0.25)`
      },
      ':hover': {
        opacity: isInactive ? '0.3 !important' : 1,
        cursor: isInactive ? 'default' : 'pointer',
        pointerEvents: isInactive ? 'none' : 'all'
      },
      ':after': {
        content: isLoading && '""',
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
        animation: 'spin 1s linear infinite',
        '@keyframes spin': {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        }
      }
    }
  }

  return merge(baseStyles, props.styles)
}
