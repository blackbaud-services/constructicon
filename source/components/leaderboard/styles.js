import merge from 'lodash/merge'

export default (
  { background, children, foreground, columns, styles },
  { colors, mediaQuery, scale, rhythm, justifyContent, treatments }
) => {
  const childrenCount = children ? children.length : 0
  const createColumns = () => {
    return Object.keys(columns).reduce((styles, breakpoint) => {
      const columnCount = columns[breakpoint]

      return merge(
        {},
        styles,
        childrenCount > 1
          ? {
            leaders: {
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap'
            },
            cell: {
              [mediaQuery(breakpoint)]: {
                width: `${100 / columnCount}%`
              }
            }
          }
          : {
            leaders: {
              [mediaQuery(breakpoint)]: {
                columnCount
              }
            }
          }
      )
    }, {})
  }

  const defaultStyles = {
    root: {
      backgroundColor: background && colors[background],
      color: foreground && colors[foreground],
      ...treatments.leaderboard
    },

    leaders: {
      counterReset: 'board',
      ...treatments.leaderboardLeaders
    },

    cell: {
      display: 'block',
      listStyle: 'none'
    },

    state: {
      display: 'flex',
      alignItems: 'flex-start',
      ...justifyContent('center'),
      padding: rhythm(2),
      fontSize: scale(-1),
      ...treatments.leaderboardState,

      '& > *': {
        margin: rhythm([0, 0.25])
      }
    }
  }

  return merge(defaultStyles, createColumns(), styles)
}
