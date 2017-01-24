export default (props, traits) => {
  const {
    border,
    color,
    font,
    gutter,
    toggled,
    styles
  } = props

  const {
    colors,
    scale,
    rhythm,
    treatments
  } = traits

  const {
    root = {},
    head = {},
    title = {},
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
      fontSize: scale(-2),
      color: toggled ? colors[color] : colors.lightGrey
    },

    title: {
      ...treatments[font],
      ...title
    },

    body: {
      display: toggled ? 'block' : 'none',
      paddingTop: rhythm(0.5),
      paddingLeft: rhythm(gutter),
      ...body
    }
  }
}
