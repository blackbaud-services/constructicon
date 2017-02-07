import merge from 'lodash/merge'

export default (props, traits) => {
  const { scale } = traits
  const { styles } = props

  const defaultStyles = {
    loading: {
      textAlign: 'center',
      fontSize: scale(2)
    },
    status: {
      marginBottom: '0'
    }
  }

  return merge(defaultStyles, styles)
}
