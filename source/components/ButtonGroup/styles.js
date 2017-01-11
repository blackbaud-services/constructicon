export default (props = {}, traits = {}) => {
  const {
    calculateSpacing,
    rhythm
  } = traits

  const {
    spacing,
    styles
  } = props

  return {
    root: {
      ...calculateSpacing(spacing, 'margin', { multiplier: -1 }),
      ...styles,

      '> *': {
        display: 'inline-block',
        ...calculateSpacing(spacing, 'margin')
      }
    }
  }
}
