export default (props = {}, traits = {}) => {
  const {
    colors,
    effects,
    radiuses,
    rhythm,
    scale,
    shadows,
    treatments
  } = traits

  const {
    background,
    borderColor,
    borderWidth,
    effect,
    font,
    foreground,
    padding,
    radius,
    shadow,
    size,
    styles
  } = props

  return {
    root: {
      display: 'inline-block',
      cursor: 'pointer',
      textDecoration: 'none',
      padding: `${rhythm(padding.y, 'em')} ${rhythm(padding.x, 'em')}`,
      backgroundColor: colors[background],
      color: colors[foreground],
      border: `${borderWidth}px solid ${colors[borderColor]}`,
      borderRadius: rhythm(radiuses[radius]),
      boxShadow: shadow && shadows[shadow],
      fontSize: scale(size),
      ...treatments[font],
      ...effects[effect],
      ...styles
    }
  }
}
