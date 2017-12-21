import merge from 'lodash/merge'

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

  const defaultStyles = {
    root: {
      background: colors[background],
      borderRadius: rhythm(radiuses[radius]),
      height: rhythm(1),
      position: 'relative'
    },
    fill: {
      background: colors[fill],
      borderRadius: rhythm(radiuses[radius]),
      position: 'absolute',
      top: 0,
      left: 0,
      width: `${progress}%`,
      height: rhythm(1)
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

  return merge(defaultStyles, styles)
}
