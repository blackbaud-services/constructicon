import merge from 'lodash/merge'

export default (
  { invalid, touched, readOnly, styles },
  { colors, fonts, measures, radiuses, rhythm, scale, treatments }
) => {
  const isInvalid = touched && invalid

  const defaultStyles = {
    root: {
      display: 'block',
      position: 'relative',
      fontFamily: fonts.body,
      textAlign: 'left',
      marginBottom: rhythm(1),
      ...treatments.inputRoot
    },

    wrapper: {
      position: 'relative',
      '& select::-ms-expand': {
        display: 'none'
      },
      '& select::-ms-value': {
        background: 'none',
        color: readOnly ? colors.lightGrey : colors.dark
      },
      '& select:-moz-focusring': {
        color: 'transparent',
        textShadow: '0 0 0 #000'
      }
    },

    input: {
      display: 'block',
      position: 'relative',
      zIndex: 1,
      width: '100%',
      textAlign: 'left',
      height: rhythm(1.666),
      lineHeight: rhythm(1.666),
      paddingLeft: rhythm(0.5),
      paddingRight: rhythm(1.25),
      color: readOnly ? colors.lightGrey : colors.dark,
      border: 0,
      backgroundColor: 'transparent',
      backgroundImage: 'none',
      boxShadow: 'none',
      appearance: 'none',
      outline: 'none',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      ...treatments.input,
      '&:focus': {
        border: 0,
        outline: 0
      },
      '&:focus + span': {
        borderColor: isInvalid ? colors.danger : colors.secondary,
        boxShadow: `0 0 5px ${isInvalid ? colors.danger : colors.secondary}`
      }
    },

    field: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0,
      backgroundColor: colors.light,
      border: `thin solid ${isInvalid ? colors.danger : colors.lightGrey}`,
      boxShadow: isInvalid && `0 0 5px ${colors.danger}`,
      borderRadius: rhythm(radiuses.small),
      ...treatments.input
    },

    icon: {
      position: 'absolute',
      top: '50%',
      right: rhythm(0.333),
      transform: 'translateY(-50%)'
    }
  }

  return merge(defaultStyles, styles)
}
