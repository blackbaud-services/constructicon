export default (props, traits) => {
  const {
    colors,
    radiuses,
    rhythm
  } = traits

  return {
    root: {
      padding: `${rhythm(props.padding.y)} ${rhythm(props.padding.x)}`,
      backgroundColor: colors[props.background],
      color: colors[props.foreground],
      border: `${props.borderWidth}px solid ${colors[props.borderColor]}`,
      borderRadius: rhythm(radiuses[props.radius]),
      ...props.styles
    }
  }
}
