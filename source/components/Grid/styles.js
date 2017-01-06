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
      margin: `${rhythm(padding.y * -1)} ${rhythm(padding.x * -1)}`,
      ...styles,

      '> *': {
        padding: `${rhythm(padding.y)} ${rhythm(padding.x)}`
      }
    }
  }
}
