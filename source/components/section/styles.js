export default (props, traits) => {
  const {
    colors,
    radiuses,
    rhythm,
    calculateSpacing
  } = traits

  const {
    background,
    borderColor,
    borderWidth,
    foreground,
    margin,
    radius,
    spacing,
    styles
  } = props

  return {
    root: {
      ...calculateSpacing(spacing),
      ...calculateSpacing(margin, 'margin'),
      backgroundColor: background && colors[background],
      color: foreground && colors[foreground],
      border: borderWidth && `${borderWidth}px solid ${colors[borderColor]}`,
      borderRadius: radius && rhythm(radiuses[radius]),
      ...styles
    }
  }
}
