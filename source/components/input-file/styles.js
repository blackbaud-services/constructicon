import merge from 'lodash/merge'

export default (
  { touched, invalid, readOnly, styles },
  { rhythm, scale, colors, fonts, treatments }
) => {
  const isInvalid = touched && invalid

  return merge(
    {
      root: {
        display: 'block',
        position: 'relative',
        fontFamily: fonts.body,
        textAlign: 'left',
        marginBottom: rhythm(1)
      },

      wrapper: {
        display: 'inline-block',
        position: 'relative'
      },

      field: {
        opacity: readOnly ? 0.5 : 1
      },

      input: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0,
        fontSize: scale(2),
        cursor: 'pointer',
        zIndex: 1,
        ...treatments.input,
        '&:hover + button:before': {
          opacity: 1
        },
        '&:focus + button': {
          borderColor: isInvalid ? colors.danger : colors.secondary,
          boxShadow: `0 0 5px ${isInvalid ? colors.danger : colors.secondary}`
        }
      }
    },
    styles
  )
}
