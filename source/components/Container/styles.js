export default (props, traits) => {
  const {
    colors,
    rhythm,
    shadows,
    treatments
  } = traits

  return {
    root: {
      maxWidth: rhythm(props.width, 'em'),
      margin: '0 auto',
      backgroundColor: colors.light,
      color: colors.dark,
      ...treatments.body,
      boxShadow: shadows[props.shadow],
      ...props.styles
    },

    outer: {
      backgroundColor: colors[props.outerColor]
    }
  }
}
