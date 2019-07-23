import merge from 'lodash/merge'

export default (
  { background, foreground, columns, styles },
  { colors, mediaQuery, scale, rhythm, justifyContent, treatments }
) => {
  const createColumns = () => {
    return Object.keys(columns).reduce(
      (styles, breakpoint) => ({
        ...styles,
        [mediaQuery(breakpoint)]: {
          columnCount: columns[breakpoint]
        }
      }),
      {}
    )
  }

  const defaultStyles = {
    root: {
      backgroundColor: background && colors[background],
      color: foreground && colors[foreground],
      ...treatments.leaderboard
    },

    leaders: {
      counterReset: 'board',
      ...createColumns(),
      ...treatments.leaderboardLeaders
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

  return merge(defaultStyles, styles)
}
