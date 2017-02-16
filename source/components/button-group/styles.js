export default (props = {}, traits = {}) => {
  const {
    calculateSpacing
  } = traits

  const {
    align,
    spacing,
    styles
  } = props

  return {
    root: {
      textAlign: align,
      ...calculateSpacing(spacing, 'margin', { multiplier: -1 }),
      ...styles,

      '> *': {
        display: 'inline-block',
        ...calculateSpacing(spacing, 'margin')
      }
    }
  }
}
