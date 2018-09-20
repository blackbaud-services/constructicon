import merge from 'lodash/merge'

export default ({ spacing, styles }, { calculateSpacing, rhythm }) => {
  const defaultStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 100,
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },

    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      width: 'calc(100vw - 2rem)',
      maxHeight: 'calc(100vh - 2rem)',
      border: '1px solid #ccc',
      background: '#fff',
      maxWidth: '40rem',
      overflow: 'hidden',
      borderRadius: '4px',
      outline: 'none',
      padding: '0'
    },

    container: {
      ...calculateSpacing(spacing),
      overflow: 'auto',
      maxHeight: 'calc(100vh - 2rem)'
    },

    close: {
      position: 'absolute',
      zIndex: 100,
      top: rhythm(0.75),
      right: rhythm(0.75)
    }
  }

  return merge(defaultStyles, styles)
}
