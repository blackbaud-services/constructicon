import merge from 'lodash/merge'

export default (
  {
    avatarRadius,
    background,
    borderColor,
    borderWidth,
    foreground,
    margin,
    radius,
    rank,
    spacing,
    styles,
    subtitle
  },
  { calculateSpacing, colors, measures, radiuses, rhythm, scale, treatments }
) => {
  const defaultStyles = {
    root: {
      display: 'block',
      position: 'relative',
      ...calculateSpacing(margin, 'margin'),
      ...calculateSpacing(spacing),
      backgroundColor: background && colors[background],
      color: foreground && colors[foreground],
      border: borderWidth && `${borderWidth}px solid ${colors[borderColor]}`,
      borderRadius: radius && rhythm(radiuses[radius]),
      breakInside: 'avoid',
      listStyle: 'none',
      ...treatments.leaderboardItem
    },

    rank: {
      width: rhythm(1),
      flexBasis: rhythm(1),
      flexShrink: 0,
      flexGrow: 0,
      marginRight: rhythm(0.25),
      textAlign: 'center',
      fontWeight: 700,
      ...treatments.leaderboardItemRank
    },

    link: {
      display: 'flex',
      alignItems: 'center',
      backfaceVisibility: 'hidden',
      transition: 'opacity 200ms ease',
      minHeight: rhythm(1.33),
      '&:hover': {
        opacity: 0.75
      }
    },

    image: {
      flex: '0 0 auto',
      width: rhythm(1.5),
      height: rhythm(1.5),
      backgroundColor: 'rgba(0,0,0,0.125)',
      border: '2px solid rgba(0,0,0,0.25)',
      borderRadius: rhythm(radiuses[avatarRadius]),
      marginRight: rhythm(0.5),
      ...treatments.leaderboardItemImage
    },

    info: {
      flex: 1,
      minWidth: 0
    },

    title: {
      fontWeight: 700,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      ...treatments.leaderboardItemTitle
    },

    subtitle: {
      lineHeight: measures.medium,
      fontSize: '0.875em',
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
      fontWeight: 700,
      lineHeight: measures.medium,
      ...treatments.leaderboardItemAmount
    }
  }

  return merge(defaultStyles, styles)
}
