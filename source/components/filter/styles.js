import merge from 'lodash/merge'

export default ({ background, foreground, styles }, { rhythm, colors }) => {
  const defaultStyles = {
    root: {
      position: 'relative',
      marginBottom: rhythm(0.5),
      backgroundColor: background && colors[background],
      color: foreground && colors[foreground]
    },

    icon: {
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    },

    input: {
      display: 'block',
      width: '100%',
      height: rhythm(2),
      paddingLeft: rhythm(1.5),
      borderBottom: `1px solid ${colors.shade} !important`
    }
  }

  return merge(defaultStyles, styles)
}
