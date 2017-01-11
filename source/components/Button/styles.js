export default (props = {}, traits = {}) => {
  const {
    calculateSpacing,
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
    block,
    borderColor,
    borderWidth,
    effect,
    font,
    foreground,
    radius,
    shadow,
    size,
    spacing,
    styles
  } = props

  return {
    root: {
      display: block ? 'block' : 'inline-block',
      width: block ? '100%' : 'auto',
      cursor: 'pointer',
      textDecoration: 'none',
      overflow: 'hidden',
      transform: 'translateZ(0)', // workaround for transition vs overflow:hidden/border-radius bug
      verticalAlign: 'middle',
      textAlign: 'center',
      ...calculateSpacing(spacing),
      backgroundColor: colors[background],
      color: colors[foreground],
      border: `${borderWidth}px solid ${colors[borderColor]}`,
      borderRadius: rhythm(radiuses[radius]),
      boxShadow: shadow && shadows[shadow],
      fontSize: scale(size),
      ...treatments[font],
      ...effects[effect],
      ...styles,

      'svg:first-child': {
        marginRight: rhythm(0.25)
      },

      'svg:last-child': {
        marginLeft: rhythm(0.25)
      }
    }
  }
}
