import merge from 'lodash/merge'

export default (props, traits) => {
  const { colors, measures, rhythm, scale } = traits
  const { styles, value } = props

  const overlay =
    'linear-gradient(rgba(240, 240, 240, 0.85),  rgba(240, 240, 240, 0.85))'

  const baseStyles = {
    root: {
      position: 'relative',
      maxWidth: '350px',
      textAlign: 'center',
      marginBottom: rhythm(1)
    },

    dropzoneContainer: {
      position: 'relative',
      paddingBottom: '87.5%'
    },

    dropzone: {
      position: 'absolute !important',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexPack: 'center',
      flexDirection: 'column',
      width: '100%',
      padding: rhythm(1),
      backgroundColor: colors.shade,
      backgroundImage: value && `${overlay}, url(${value})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      textAlign: 'center',
      lineHeight: measures.medium,

      '& p': {
        marginTop: rhythm(0.5),
        fontSize: scale(-1),
        opacity: 0.5
      },

      '& small': {
        display: 'block',
        marginTop: rhythm(0.25),
        fontSize: scale(-2)
      }
    },

    clear: {
      marginTop: rhythm(0.5),
      fontSize: scale(-1),
      textDecoration: 'underline',
      opacity: 0.5
    },

    slider: {
      height: rhythm(0.5),
      maxWidth: 250,
      margin: '1rem auto 0',
      backgroundColor: colors.shade,
      borderRadius: rhythm(0.25)
    },

    sliderHandle: {
      height: rhythm(1),
      width: rhythm(1),
      backgroundColor: colors.primary,
      borderRadius: rhythm(0.5),
      transform: `translateY(${rhythm(-0.25)})`,
      cursor: 'pointer'
    },

    note: {
      maxWidth: rhythm(10),
      margin: `${rhythm(1)} auto`,
      fontSize: scale(-1),
      lineHeight: measures.medium,
      opacity: 0.5
    },

    form: {
      root: {
        '& > button': {
          margin: '0 auto'
        }
      }
    }
  }

  return merge(baseStyles, styles)
}
