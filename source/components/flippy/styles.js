import merge from 'lodash/merge'

export default (
  { background, font, foreground, image, size, spacing, styles },
  { rhythm, scale, colors, treatments, calculateSpacing, justifyContent }
) => {
  const defaultStyles = {
    root: {
      display: 'block',
      position: 'relative',
      perspective: '1000px',
      WebkitPerspective: '1000px',
      textAlign: 'center',
      width: '100%',
      paddingBottom: '100%',
      '&:hover > div:first-child': {
        transform: 'rotateY(180deg)'
      },
      '&:hover > div:last-child': {
        transform: 'rotateY(0)'
      }
    },

    wrapper: {
      backfaceVisibility: 'hidden',
      display: 'flex',
      position: 'absolute',
      top: 0,
      left: 0,
      padding: rhythm(1),
      height: '100%',
      width: '100%',
      transition: '0.5s ease-out',
      transformStyle: 'preserve-3d',
      flexDirection: 'column',
      alignItems: 'center',
      alignContent: 'center',
      ...justifyContent('center'),
      textAlign: 'center',
      backgroundColor: colors[background],
      color: colors[foreground],
      fontSize: scale(size),
      ...calculateSpacing(spacing),
      ...treatments[font]
    },

    front: {
      transform: 'rotateY(0)',
      visibility: 'visible',
      zIndex: 1,
      '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        background: image && `url(${image})`
      }
    },

    back: {
      transform: 'rotateY(-180deg)'
    }
  }

  return merge(defaultStyles, styles)
}
