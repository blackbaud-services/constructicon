export default (props, traits) => {
  const {
    colors,
    rhythm,
    shadows,
    treatments
  } = traits

  const {
    shadow,
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
      backgroundColor: colors.light,
      color: colors.dark,
      ...treatments.body,
      boxShadow: shadow && shadows[shadow],
      ...styles
    },

    outer: {
      backgroundColor: colors[outerColor]
    }
  }
}
