import merge from 'lodash/merge'

export default (
  { color, size, spacing, styles },
  { calculateSpacing, colors, scale, treatments }
) => ({
  root: merge(
    {
      ...treatments.head,
      ...calculateSpacing(spacing, 'margin'),
      fontSize: scale(size),
      color: color && colors[color]
    },
    styles
  )
})
