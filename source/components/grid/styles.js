export default (props, traits) => {
  const {
    calculateSpacing
  } = traits

  const {
    spacing,
    styles
  } = props

  const flexPack = {
    ['flex-start']: 'start',
    ['flex-end']: 'end',
    ['space-between']: 'justify',
    ['space-around']: 'distribute',
    ['center']: 'center'
  }

  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: props.align,
      justifyContent: props.justify,
      flexPack: flexPack[props.justify],
      direction: props.direction,
      ...calculateSpacing(spacing, 'margin', { multiplier: -1 }),
      ...styles,

      '> *': {
        ...calculateSpacing(spacing, 'padding')
      }
    }
  }
}
