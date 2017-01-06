export default (props, traits) => {
  const {
    colors,
    radiuses,
    rhythm
  } = traits

  const {
    background,
    borderColor,
    borderWidth,
    foreground,
    padding,
    radius
  } = props

  return {
    root: {
      padding: `${rhythm(padding.y)} ${rhythm(padding.x)}`,
      backgroundColor: background && colors[background],
      color: foreground && colors[foreground],
      border: borderWidth && `${borderWidth}px solid ${colors[borderColor]}`,
      borderRadius: radius && rhythm(radiuses[radius]),
      ...props.styles
    }
  }
}
