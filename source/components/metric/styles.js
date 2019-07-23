import merge from 'lodash/merge'

export default ({ align, styles }, { rhythm, scale, treatments }) => {
  const defaultStyles = {
    root: {
      textAlign: align,
      ...treatments.metric
    },

    icon: {
      marginBottom: rhythm(0.66),
      ...treatments.metricIcon
    },

    label: {
      display: 'block',
      opacity: 0.5,
      marginBottom: rhythm(0.33),
      fontSize: scale(-1),
      ...treatments.button,
      ...treatments.metricLabel
    },

    amount: {
      fontSize: scale(3),
      ...treatments.head,
      ...treatments.metricAmount
    }
  }

  return merge(defaultStyles, styles)
}
