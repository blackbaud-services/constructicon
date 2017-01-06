export default (props, traits) => {
  const {
    mediaQuery
  } = traits

  const {
    xs,
    sm,
    md,
    lg,
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
      ...calculateSize(xs),
      [mediaQuery('sm')]: calculateSize(sm),
      [mediaQuery('md')]: calculateSize(md),
      [mediaQuery('lg')]: calculateSize(lg),
      ...styles,
    }
  }
}
