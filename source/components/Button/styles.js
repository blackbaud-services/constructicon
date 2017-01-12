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

      '> *': {
        margin: `0 ${rhythm(0.125)}`
      },

      '> *:first-child': {
        marginLeft: 0
      },

      '> *:last-child': {
        marginRight: 0
      },

      '> *:first-child:last-child': {
        display: 'block' // removes awkward spacing around single child e.g. share icon
      }
    }
  }
}
