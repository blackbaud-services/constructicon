import merge from 'lodash/merge'

export default (
  { border, color, font, gutter, toggled, styles },
  { colors, scale, rhythm, treatments, justifyContent }
) => {
  const borderStyles = border
    ? {
      paddingLeft: rhythm(0.5),
      borderLeft: `2px solid ${toggled ? colors[color] : colors.shade}`
    }
    : {}

  const defaultStyles = {
    root: {
      position: 'relative',
      paddingTop: rhythm(0.5),
      paddingBottom: rhythm(0.5),
      ...borderStyles
    },

    head: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      ...justifyContent('flex-start'),
      cursor: 'pointer',
      '&:focus:after': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        boxShadow: `0 0 1rem ${colors.shade}`,
        pointerEvents: 'none'
      }
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
