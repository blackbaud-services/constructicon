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
      display: 'inline-block',
      cursor: 'pointer',
      textDecoration: 'none',
      overflow: 'hidden',
      transform: 'translateZ(0)', // workaround for transition vs overflow:hidden/border-radius bug
      verticalAlign: 'middle',
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

      '> *': {
        margin: `0 ${rhythm(0.125)}`
      },

      'svg:first-child': {
        marginLeft: 0
      },

      'svg:last-child': {
        marginRight: 0
      }
    }
  }
}
