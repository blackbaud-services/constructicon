export default (props = {}, traits = {}) => {
  const {
    colors,
    radiuses,
    rhythm
  } = traits

  const {
    background,
    fill,
    radius,
    styles,
    progress = 0
  } = props

  return {
    background: {
      background: colors[background],
      borderRadius: rhythm(radiuses[radius]),
      height: rhythm(1),
      position: 'relative',
      ...styles.background
    },
    fill: {
      background: colors[fill],
      borderRadius: rhythm(radiuses[radius]),
      position: 'absolute',
      top: 0,
      left: 0,
      width: `${progress}%`,
      height: rhythm(1),
      ...styles.fill
    },
    alt: {
      position: 'absolute',
      left: '-10000px',
      top: 'auto',
      width: '1px',
      height: '1px',
      overflow: 'hidden'
    }
  }
}
