import merge from 'lodash/merge'

export default (
  { color, size, styles },
  { colors, rhythm, scale, treatments }
) => ({
  root: merge(
    {
      ...treatments.head,
      fontSize: scale(size),
      marginTop: rhythm(1),
      marginBottom: rhythm(1),
      color: color && colors[color],

    '&:first-child': {
      marginTop: 0
    }
  }, styles)
})
