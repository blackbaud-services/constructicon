import merge from 'lodash/merge'
import { isBoolean } from '../../lib/form'

export default (
  { label, type, touched, invalid, readOnly, styles },
  { colors, fonts, measures, radiuses, rhythm, scale, treatments }
) => {
  const checkbox = isBoolean(type)
  const textarea = ['textarea', 'contenteditable'].indexOf(type) > -1
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
        padding: rhythm([textarea ? 0.25 : 0.125, 0.333]),
        height: textarea ? 'auto' : rhythm(1.666),
        lineHeight: textarea && '1.333em',
        minHeight: textarea && rhythm(3.25),
        border: `thin solid ${isInvalid ? colors.danger : colors.lightGrey}`,
        boxShadow: isInvalid ? `0 0 5px ${colors.danger}` : 'none',
        borderRadius: rhythm(radiuses.small),
        ...(type === 'textarea' && {
          maxHeight: rhythm(12),
          resize: 'vertical'
        }),
        ...treatments.input,

        '&:focus': {
          borderColor: isInvalid ? colors.danger : colors.secondary,
          boxShadow: `0 0 5px ${isInvalid ? colors.danger : colors.secondary}`
        },

        b: {
          fontWeight: 'bold'
        },

        i: {
          fontStyle: 'italic'
        },

        's, strike': {
          textDecoration: 'line-through'
        },

        u: {
          textDecoration: 'underline'
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
