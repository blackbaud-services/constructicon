import merge from 'lodash/merge'

export default (
  {
    background,
    foreground,
    height,
    items = [],
    labelBackground,
    labelForeground,
    spacing,
    styles
  },
  { colors, rhythm, treatments }
) =>
  merge(
    {
      root: {
        position: 'relative',
        overflow: 'hidden',
        height: rhythm(height),
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
        transform: 'translate3d(0,0,0)',
        ...treatments.head
      },

      items: {
        height: rhythm(height),
        lineHeight: rhythm(height),
        whiteSpace: 'nowrap'
      },

      item: {
        display: 'inline-block',
        marginRight: rhythm(1)
      }
    },
    styles
  )
