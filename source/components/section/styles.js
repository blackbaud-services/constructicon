import merge from 'lodash/merge'

export default (
  {
    background,
    borderColor,
    borderWidth,
    foreground,
    margin,
    radius,
    spacing,
    styles
  },
  { colors, radiuses, rhythm, calculateSpacing }
) => ({
  root: merge(
    {
      ...calculateSpacing(spacing),
      ...calculateSpacing(margin, 'margin'),
      backgroundColor: background && colors[background],
      color: foreground && colors[foreground],
      border: borderWidth && `${borderWidth}px solid ${colors[borderColor]}`,
      borderRadius: radius && rhythm(radiuses[radius])
    },
    styles
  )
})
