export default (props, traits) => {
  const {
    background,
    foreground,
    styles
  } = props

  const {
    colors,
    rhythm
  } = traits

  return {
    root: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      flexWrap: 'wrap',
      margin: rhythm(-1),
      color: foreground && colors[foreground],
      backgroundColor: background && colors[background],

      '> *': {
        margin: rhythm(1)
      },

      ...styles
    }
  }
}
