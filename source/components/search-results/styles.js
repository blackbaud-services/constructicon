import merge from 'lodash/merge'

export default ({ styles }, { rhythm, scale, justifyContent }) => {
  const defaultStyles = {
    loading: {
      textAlign: 'center',
      fontSize: scale(2)
    },

    state: {
      display: 'flex',
      alignItems: 'flex-start',
      ...justifyContent('center'),
      padding: rhythm(2),
      fontSize: scale(-1),

      '& > *': {
        margin: rhythm([0, 0.25])
      }
    }
  }

  return merge(defaultStyles, styles)
}
