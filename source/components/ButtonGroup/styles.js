export default (props = {}, traits = {}) => {
  const {
    rhythm
  } = traits

  const {
    padding,
    styles
  } = props

  return {
    root: {
      margin: `${rhythm(padding.y * -1, 'em')} ${rhythm(padding.x * -1, 'em')}`,
      ...styles,

      '> *': {
        margin: `${rhythm(padding.y, 'em')} ${rhythm(padding.x, 'em')}`
      }
    }
  }
}
