export default (props, traits) => {
  const {
    colors,
    mediaQuery,
    radiuses,
    rhythm
  } = traits

  const {
    xs,
    sm,
    md,
    lg,
    xsAlign,
    smAlign,
    mdAlign,
    lgAlign,
    background,
    borderColor,
    borderWidth,
    foreground,
    radius,
    styles
  } = props

  const calculateSize = (cols) => (
    cols ? {
      flex: `1 0 ${100 / 12 * cols}%`,
      maxWidth: `${100 / 12 * cols}%`
    } : {}
  )

  return {
    root: {
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
      ...styles
    }
  }
}
