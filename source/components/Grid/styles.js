export default (props, traits) => {
  const {
    rhythm
  } = traits

  const {
    padding,
    styles
  } = props

  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: props.align,
      justifyContent: props.justify,
      direction: props.direction,
      margin: `${rhythm(padding.y * -0.5)} ${rhythm(padding.x * -0.5)}`,
      ...styles,

      '> *': {
        padding: `${rhythm(padding.y * 0.5)} ${rhythm(padding.x * 0.5)}`
      }
    }
  }
}
