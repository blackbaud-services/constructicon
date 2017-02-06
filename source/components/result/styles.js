import merge from 'lodash/merge'

export default (props, traits) => {
  const {
    measures,
    rhythm,
    treatments
  } = traits

  const baseStyles = {
    ...treatments.body,

    p: {
      paddingBottom: rhythm(1),
      lineHeight: measures.medium
    }
  }

  return {
    root: merge(baseStyles, props.styles)
  }
}
