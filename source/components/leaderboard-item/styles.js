import merge from 'lodash/merge'

export default ({ rank, styles, subtitle }, { measures, rhythm, scale, treatments }) => {
  const defaultStyles = {
    root: {
      display: 'block',
      position: 'relative',
      minHeight: rhythm(2),
      padding: `${rhythm(0.33)} ${rhythm(0.33)} ${rhythm(0.33)} ${rhythm(
        rank ? 2 : 0.33
      )}`,
      fontSize: scale(-1),
      breakInside: 'avoid',
      listStyle: 'none',
      ...treatments.leaderboardItem
    },

    rank: {
      position: 'absolute',
      top: '50%',
      left: rhythm(0.5),
      height: rhythm(2),
      lineHeight: rhythm(2),
      marginTop: rhythm(-1),
      ...treatments.leaderboardItemRank
    },

    link: {
      display: 'flex',
      alignItems: 'center',
      transition: 'opacity 200ms ease',
      minHeight: rhythm(1.33),
      '&:hover': {
        opacity: 0.75
      }
    },

    image: {
      flex: '0 0 auto',
      width: rhythm(1.25),
      height: rhythm(1.25),
      backgroundColor: 'rgba(0,0,0,0.125)',
      border: '2px solid rgba(0,0,0,0.25)',
      borderRadius: '50%',
      marginRight: rhythm(0.5),
      ...treatments.leaderboardItemImage
    },

    info: {
      flex: 1,
      minWidth: 0
    },

    title: {
      marginBottom: subtitle && rhythm(0.125),
      fontWeight: 700,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      ...treatments.leaderboardItemTitle
    },

    subtitle: {
      lineHeight: measures.medium,
      fontSize: '0.75em',
      opacity: 0.7,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      ...treatments.leaderboardItemSubtitle
    },

    amount: {
      flex: '0 0 auto',
      paddingLeft: rhythm(0.5),
      paddingRight: rhythm(0.5),
      textAlign: 'right',
      lineHeight: measures.medium,
      ...treatments.leaderboardItemAmount
    }
  }

  return merge(defaultStyles, styles)
}
