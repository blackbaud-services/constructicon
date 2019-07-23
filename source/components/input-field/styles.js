import merge from 'lodash/merge'
import { isBoolean } from '../../lib/form'

export default (
  { label, type, touched, invalid, readOnly, styles },
  { colors, fonts, measures, radiuses, rhythm, scale, treatments }
) => {
  const checkbox = isBoolean(type)
  const textarea = type === 'textarea'
  const isInvalid = touched && invalid

  const defaultStyles = {
    root: {
      display: 'block',
      position: 'relative',
      paddingLeft: checkbox ? rhythm(1) : '0',
      fontFamily: fonts.body,
      textAlign: 'left',
      marginBottom: rhythm(1),
      ...treatments.inputRoot
    },

    field: checkbox
      ? {
        position: 'absolute',
        top: rhythm(0.125),
        left: 0
      }
      : {
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

        '&:focus': {
          borderColor: isInvalid ? colors.danger : colors.secondary,
          boxShadow: `0 0 5px ${isInvalid ? colors.danger : colors.secondary}`
        }
      },

    status: {
      position: 'absolute',
      top: label ? rhythm(1.633) : rhythm(0.5),
      right: rhythm(0.5),
      pointerEvents: 'none'
    }
  }

  return merge(defaultStyles, styles)
}
