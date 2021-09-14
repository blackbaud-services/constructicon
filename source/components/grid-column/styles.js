import merge from 'lodash/merge'

export default (
  {
    xs,
    sm,
    md,
    lg,
    xl,
    xsAlign,
    smAlign,
    mdAlign,
    lgAlign,
    xlAlign,
    background,
    borderColor,
    borderWidth,
    foreground,
    radius,
    styles
  },
  { colors, mediaQuery, radiuses, rhythm }
) => {
  const calculateSize = cols =>
    cols
      ? {
          flex: `1 0 ${(100 / 12) * cols}%`,
          maxWidth: `${(100 / 12) * cols}%`
        }
      : {}

  return {
    root: merge(
      {
        backgroundColor: colors[background],
        color: colors[foreground],
        border: borderWidth && `${borderWidth}px solid ${colors[borderColor]}`,
        borderRadius: radius && rhythm(radiuses[radius]),
        textAlign: xsAlign,
        ...calculateSize(xs),
        [mediaQuery('sm')]: {
          textAlign: smAlign,
          ...calculateSize(sm)
        },
        [mediaQuery('md')]: {
          textAlign: mdAlign,
          ...calculateSize(md)
        },
        [mediaQuery('lg')]: {
          textAlign: lgAlign,
          ...calculateSize(lg)
        },
        [mediaQuery('xl')]: {
          textAlign: xlAlign,
          ...calculateSize(xl)
        }
      },
      styles
    )
  }
}
