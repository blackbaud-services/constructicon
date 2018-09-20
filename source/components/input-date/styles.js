import merge from 'lodash/merge'

export default (
  { spacing = 0.5, styles },
  { rhythm, scale, colors, fonts, measures }
) => {
  const baseStyles = {
    root: {
      display: 'block',
      position: 'relative',
      fontFamily: fonts.body,
      textAlign: 'left',
      marginBottom: rhythm(1)
    },

    wrapper: {
      display: 'flex',
      flexWrap: 'nowrap',
      marginLeft: rhythm(-spacing)
    },

    input: {
      root: {
        flex: 'auto',
        marginBottom: 0,
        marginLeft: rhythm(spacing)
      },
      field: {
        textAlign: 'center'
      },
      label: {
        display: 'none'
      }
    }
  }

  return merge(baseStyles, styles)
}
