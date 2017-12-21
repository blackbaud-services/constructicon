import merge from 'lodash/merge'

export default ({ styles }, {
  rhythm,
  scale,
  treatments
}) => {
  const defaultStyles = {
    root: {
      textAlign: 'center'
    },

    icon: {
      marginBottom: rhythm(0.66)
    },

    label: {
      display: 'block',
      marginBottom: rhythm(0.33),
      fontSize: scale(-1),
      ...treatments.button
    },

    amount: {
      fontSize: scale(3),
      ...treatments.heading
    }
  }

  return merge(defaultStyles, styles)
}
