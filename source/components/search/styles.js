import merge from 'lodash/merge'

export default (props, traits) => {
  const {
    treatments,
    scale
  } = traits

  const baseStyles = {
    ...treatments.body
  }

  return {
    wrapper: merge(baseStyles, props.styles),
    loading: {
      textAlign: 'center',
      fontSize: scale(2)
    },
    status: {
      marginBottom: '0'
    }
  }
}
