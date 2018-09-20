import merge from 'lodash/merge'

export default ({ align, styles }, { rhythm, scale, treatments }) => {
  const defaultStyles = {
    root: {
      textAlign: align
    },

    icon: {
      marginBottom: rhythm(0.66)
    },

    label: {
      display: 'block',
      opacity: 0.5,
      marginBottom: rhythm(0.33),
      fontSize: scale(-1),
      ...treatments.button
    },

    amount: {
      fontSize: scale(3),
      ...treatments.head
    }
  }

  return merge(defaultStyles, styles)
}
