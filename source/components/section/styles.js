import merge from 'lodash/merge'

export default (
  {
    background,
    borderColor,
    borderWidth,
    foreground,
    margin,
    font,
    radius,
    size,
    spacing,
    styles,
    textAlign
  },
  { colors, radiuses, rhythm, calculateSpacing, scale, treatments }
) => ({
  root: merge(
    {
      ...calculateSpacing(spacing),
      ...calculateSpacing(margin, 'margin'),
      ...treatments[font || 'body'],
      backgroundColor: background && colors[background],
      border: borderWidth && `${borderWidth}px solid ${colors[borderColor]}`,
      borderRadius: radius && rhythm(radiuses[radius]),
      color: foreground && colors[foreground],
      fontSize: scale(size),
      textAlign
    },
    styles
  )
})
