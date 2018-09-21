import merge from 'lodash/merge'

export default ({ align, spacing, styles }, { calculateSpacing }) => ({
  root: merge(
    {
      textAlign: align,
      ...calculateSpacing(spacing, 'margin', { multiplier: -1 }),

      '& > *': {
        display: 'inline-block',
        ...calculateSpacing(spacing, 'margin')
      }
    },
    styles
  )
})
