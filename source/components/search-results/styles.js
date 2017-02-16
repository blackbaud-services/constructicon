import merge from 'lodash/merge'

export default (props, traits) => {
  const {
    background,
    foreground,
    styles
  } = props

  const {
    colors,
    scale,
    rhythm
  } = traits

  const defaultStyles = {
    root: {
      backgroundColor: background && colors[background],
      color: foreground && colors[foreground]
    },

    state: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: rhythm(2),
      fontSize: scale(-1),

      '> *': {
        margin: `0 ${rhythm(0.25)}`
      }
    }
  }

  return merge(defaultStyles, styles)
}
