export default (props, traits) => {
  const {
    border,
    color,
    gutter,
    toggled,
    styles
  } = props

  const {
    colors,
    scale,
    rhythm
  } = traits

  const {
    root = {},
    head = {},
    body = {}
  } = styles

  const borderStyles =
    border ? {
      paddingLeft: rhythm(0.5),
      borderLeft: `2px solid ${toggled ? colors[color] : colors.shade}`
    } : {}

  return {
    root: {
      paddingTop: rhythm(0.5),
      paddingBottom: rhythm(0.5),
      ...borderStyles,
      ...root
    },

    head: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      cursor: 'pointer',
      ...head
    },

    toggle: {
      flexBasis: rhythm(gutter),
      display: 'flex',
      alignItems: 'flex-start',
      fontSize: scale(-1),
      color: toggled ? colors[color] : colors.lightGrey
    },

    body: {
      display: toggled ? 'block' : 'none',
      paddingTop: rhythm(0.5),
      paddingLeft: rhythm(gutter),
      ...body
    }
  }
}
