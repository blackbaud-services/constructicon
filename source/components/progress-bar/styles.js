import merge from 'lodash/merge'

export default (
  { background, fill, radius, progress = 0, styles },
  { rhythm, colors, radiuses }
) => {
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
      maxWidth: '100%',
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
