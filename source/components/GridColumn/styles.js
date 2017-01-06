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
      ...calculateSize(xs),
      [mediaQuery('sm')]: calculateSize(sm),
      [mediaQuery('md')]: calculateSize(md),
      [mediaQuery('lg')]: calculateSize(lg),
      ...styles,
    }
  }
}
