export default (props, traits) => {
  const {
    calculateSpacing,
    colors,
    rhythm,
    shadows,
    treatments
  } = traits

  const {
    shadow,
    background,
    foreground,
    outerColor,
    styles,
    width,
    spacing,
    fullHeight
  } = props

  return {
    root: {
      maxWidth: width ? rhythm(width) : treatments.container.maxWidth,
      minHeight: fullHeight && '100vh',
      margin: '0 auto',
      ...calculateSpacing(spacing),
      backgroundColor: background && colors[background],
      color: foreground && colors[foreground],
      ...treatments.body,
      boxShadow: shadow && shadows[shadow],
      ...styles
    },

    outer: {
      backgroundColor: outerColor && colors[outerColor]
    }
  }
}
