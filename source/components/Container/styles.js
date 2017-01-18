export default (props, traits) => {
  const {
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
    fullHeight
  } = props

  return {
    root: {
      maxWidth: rhythm(width, 'em'),
      minHeight: fullHeight && '100vh',
      margin: '0 auto',
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
