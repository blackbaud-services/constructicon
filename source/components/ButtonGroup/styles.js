export default (props = {}, traits = {}) => {
  const {
    rhythm
  } = traits

  return {
    root: {
      margin: `${rhythm(props.padding.x * -1, 'em')} ${rhythm(props.padding.y * -1, 'em')}`,
      ...props.styles,

      '> *': {
        margin: `${rhythm(props.padding.x, 'em')} ${rhythm(props.padding.y, 'em')}`
      }
    }
  }
}
