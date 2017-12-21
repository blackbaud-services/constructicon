import merge from 'lodash/merge'

export default ({
  align,
  direction,
  justify,
  spacing,
  styles
}, {
  calculateSpacing,
  justifyContent
}) => {
  const flexPack = {
    'flex-start': 'start',
    'flex-end': 'end',
    'space-between': 'justify',
    'space-around': 'distribute',
    'center': 'center'
  }

  return {
    root: merge({
      display: 'flex',
      minWidth: '100%',
      flexWrap: 'wrap',
      alignItems: align,
      direction: direction,
      ...justifyContent(justify),
      ...calculateSpacing(spacing, 'margin', { multiplier: -1 }),

      '> *': {
        ...calculateSpacing(spacing, 'padding')
      }
    }, styles)
  }
}
