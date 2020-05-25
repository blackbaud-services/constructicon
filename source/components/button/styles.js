import merge from 'lodash/merge'
import { getForegroundColor } from '../../lib/color'

export default (
  {
    background,
    block,
    borderColor,
    borderWidth,
    effect,
    font,
    foreground,
    radius,
    shadow,
    size,
    spacing,
    styles
  },
  {
    calculateSpacing,
    colors,
    effects,
    radiuses,
    rhythm,
    scale,
    shadows,
    treatments
  }
) => {
  const backgroundColor = colors[background] || colors.primary
  const foregroundColor = colors[foreground] || colors.light

  const baseStyles = {
    display: block ? 'block' : 'inline-block',
    width: block ? '100%' : 'auto',
    cursor: 'pointer',
    textDecoration: 'none',
    overflow: 'hidden',
    transform: 'translateZ(0)', // workaround for transition vs overflow:hidden/border-radius bug
    verticalAlign: 'middle',
    textAlign: 'center',
    ...calculateSpacing(spacing),
    backgroundColor,
    color: getForegroundColor(backgroundColor, foregroundColor),
    border: `${borderWidth}px solid ${colors[borderColor]}`,
    borderRadius: rhythm(radiuses[radius]),
    boxShadow: shadow && shadows[shadow],
    fontSize: scale(size),
    ...treatments[font],
    ...effects[effect],

    '& > *': {
      margin: rhythm([0, 0.125])
    },

    '& > *:first-child': {
      marginLeft: 0
    },

    '& > *:last-child': {
      marginRight: 0
    },

    '& > *:first-child:last-child': {
      display: 'block' // removes awkward spacing around single child e.g. share icon
    }
  }

  return { root: merge(baseStyles, styles) }
}
