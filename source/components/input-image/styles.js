import merge from 'lodash/merge'
import { getForegroundColor } from '../../lib/color'

export default (props, traits) => {
  const { styles, value, maxWidth } = props
  const { colors, effects, measures, rhythm, scale, treatments } = traits

  const overlay =
    'linear-gradient(rgba(240, 240, 240, 0.85),  rgba(240, 240, 240, 0.85))'

  const baseStyles = {
    root: {
      position: 'relative',
      textAlign: 'center',
      maxWidth: maxWidth,
      marginBottom: rhythm(1)
    },

    image: {
      position: 'relative'
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
      margin: rhythm(0.25),
      fontSize: scale(-1),
      textDecoration: 'underline',
      opacity: 0.5
    },

    controls: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto'
    },

    slider: {
      flex: 1,
      height: rhythm(0.5),
      maxWidth: 250,
      backgroundColor: colors.shade,
      borderRadius: rhythm(0.25),
      marginRight: rhythm(0.5)
    },

    sliderTrack: {
      height: rhythm(0.5)
    },

    sliderHandle: {
      ...treatments.button,
      position: 'relative',
      height: rhythm(1),
      width: rhythm(1),
      backgroundColor: colors.primary,
      color: getForegroundColor(colors.primary, colors.light),
      borderRadius: rhythm(1),
      transform: `translateY(${rhythm(-0.25)})`,
      cursor: 'pointer',
      ...effects.tint
    },

    fileInfo: {
      display: 'inline-block',
      verticalAlign: 'middle',
      maxWidth: rhythm(8),
      margin: rhythm([0.5, 0.25]),
      fontSize: scale(-1),
      lineHeight: measures.medium,
      opacity: 0.5,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },

    orientation: {
      position: 'absolute',
      top: rhythm(1),
      right: rhythm(1)
    },

    icon: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
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
