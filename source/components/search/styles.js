import merge from 'lodash/merge'

export default (props, traits) => {
  const {
    treatments
  } = traits

  const baseStyles = {
    ...treatments.body
  }

  return {
    wrapper: merge(baseStyles, props.styles)
  }
}
