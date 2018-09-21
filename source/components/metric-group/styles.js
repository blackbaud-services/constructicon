import merge from 'lodash/merge'

export default (
  { background, foreground, styles },
  { rhythm, colors, justifyContent }
) => ({
  root: merge(
    {
      display: 'flex',
      alignItems: 'flex-start',
      ...justifyContent('center'),
      flexWrap: 'wrap',
      margin: rhythm(-1),
      color: foreground && colors[foreground],
      backgroundColor: background && colors[background],

      '& > *': {
        margin: rhythm(1)
      }
    },
    styles
  )
})
