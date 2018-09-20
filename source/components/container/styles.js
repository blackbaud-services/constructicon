import merge from 'lodash/merge'

export default (
  {
    shadow,
    background,
    foreground,
    outerColor,
    width,
    spacing,
    fullHeight,
    styles
  },
  { calculateSpacing, colors, rhythm, shadows, treatments }
) => {
  const defaultStyles = {
    root: {
      maxWidth: width ? rhythm(width) : treatments.container.maxWidth,
      minHeight: fullHeight && '100vh',
      margin: '0 auto',
      ...calculateSpacing(spacing),
      backgroundColor: background && colors[background],
      color: foreground && colors[foreground],
      ...treatments.body,
      boxShadow: shadow && shadows[shadow]
    },

    outer: {
      backgroundColor: outerColor && colors[outerColor]
    }
  }

  return merge(defaultStyles, styles)
}
