import merge from 'lodash/merge'

export default (props, traits) => {
  const {
    rhythm,
    scale,
    treatments
  } = traits

  const baseStyles = {
    ...treatments.head,
    fontSize: scale(3),
    marginTop: rhythm(1),
    marginBottom: rhythm(1),
    ':first-child': {
      marginTop: 0
    }
  }

  return {
    root: merge(baseStyles, props.styles)
  }
}
