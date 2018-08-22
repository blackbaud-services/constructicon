import merge from 'lodash/merge'

export default ({
  border,
  color,
  font,
  gutter,
  toggled,
  styles
}, {
  colors,
  scale,
  rhythm,
  treatments,
  justifyContent
}) => {
  const borderStyles = border ? {
    paddingLeft: rhythm(0.5),
    borderLeft: `2px solid ${toggled ? colors[color] : colors.shade}`
  } : {}

  const defaultStyles = {
    root: {
      paddingTop: rhythm(0.5),
      paddingBottom: rhythm(0.5),
      ...borderStyles
    },

    head: {
      display: 'flex',
      alignItems: 'center',
      ...justifyContent('flex-start'),
      cursor: 'pointer'
    },

    toggle: {
      flexBasis: rhythm(gutter),
      display: 'flex',
      alignItems: 'flex-start',
      flex: `0 0 ${rhythm(1)}`,
      fontSize: scale(-2),
      color: toggled ? colors[color] : colors.lightGrey
    },

    title: {
      ...treatments[font]
    },

    body: {
      display: toggled ? 'block' : 'none',
      paddingTop: rhythm(0.5),
      paddingLeft: rhythm(gutter)
    }
  }

  return merge(defaultStyles, styles)
}
