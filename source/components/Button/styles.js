export default (props = {}, traits = {}) => {
  const {
    colors,
    effects,
    radiuses,
    rhythm,
    scale,
    shadows,
    transitions,
    treatments
  } = traits

  const transition = transitions[props.transition]
  const effect = effects[props.effect]

  return {
    root: {
      display: 'inline-block',
      padding: `${rhythm(props.padding.x, 'em')} ${rhythm(props.padding.y, 'em')}`,
      backgroundColor: colors[props.background],
      color: colors[props.foreground],
      border: `${props.borderWidth}px solid ${colors[props.borderColor]}`,
      borderRadius: rhythm(radiuses[props.radius]),
      boxShadow: shadows[props.shadow],
      fontSize: scale(props.size),
      ...treatments[props.font],
      ...effect(transition),
      ...props.styles
    }
  }
}
