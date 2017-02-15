import merge from 'lodash/merge'

export default (props, traits) => {
  const {
    scale,
    rhythm
  } = traits
  const { styles } = props

  const defaultStyles = {
    loading: {
      textAlign: 'center',
      fontSize: scale(2)
    },
    status: {
      marginBottom: '0'
    },
    state: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: rhythm(2),
      fontSize: scale(-1),

      '> *': {
        margin: `0 ${rhythm(0.25)}`
      }
    }
  }

  return merge(defaultStyles, styles)
}
