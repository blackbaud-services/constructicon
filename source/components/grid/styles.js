import merge from 'lodash/merge'

export default (
  { align, direction, justify, spacing, styles },
  { calculateSpacing, justifyContent }
) => ({
  root: merge(
    {
      display: 'flex',
      minWidth: '100%',
      flexWrap: 'wrap',
      alignItems: align,
      direction: direction,
      ...justifyContent(justify),
      ...calculateSpacing(spacing, 'margin', { multiplier: -1 }),

      '& > *': {
        ...calculateSpacing(spacing, 'padding')
      },

      '& > *:empty': {
        padding: 0
      }
    },
    styles
  )
})
