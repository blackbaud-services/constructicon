import merge from 'lodash/merge'

const speeds = {
  snail: 5,
  slow: 3,
  medium: 2,
  fast: 1
}

export default (
  {
    background,
    foreground,
    items = [],
    labelBackground,
    labelForeground,
    spacing,
    speed,
    styles
  },
  { colors, rhythm, treatments }
) =>
  merge(
    {
      root: {
        position: 'relative',
        overflow: 'hidden',
        height: rhythm(2.5),
        backgroundColor: colors[background],
        color: colors[foreground]
      },

      label: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexPack: 'center',
        padding: `${rhythm(0.5)} ${rhythm(1)}`,
        backgroundColor: colors[labelBackground],
        color: colors[labelForeground],
        boxShadow: `0.5rem 0 3rem ${colors[background]}`,
        ...treatments.head
      },

      items: {
        position: 'absolute',
        top: '50%',
        left: 0,
        paddingLeft: '100%',
        animation: `marquee linear infinite`,
        whiteSpace: 'nowrap',
        animationDuration: `${items.length * speeds[speed]}s`,

        '@keyframes marquee': {
          '0%': {
            // from off the right of the viewport i.e. move 100vw along the X axis
            transform: 'translate(0, -50%)'
          },
          '100%': {
            // to off the left of the viewport i.e. -100% of the width of the content along the X axis
            transform: 'translate(-100%, -50%)'
          }
        }
      },

      item: {
        display: 'inline-block',
        marginRight: rhythm(1)
      }
    },
    styles
  )
