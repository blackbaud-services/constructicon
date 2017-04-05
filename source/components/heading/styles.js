import merge from 'lodash/merge'

export default (props, traits) => {
  const {
    colors,
    rhythm,
    scale,
    treatments
  } = traits

  const baseStyles = {
    ...treatments.head,
    fontSize: scale(props.size),
    marginTop: rhythm(1),
    marginBottom: rhythm(1),
    color: props.color && colors[props.color],
    ':first-child': {
      marginTop: 0
    }
  }

  return {
    root: merge(baseStyles, props.styles)
  }
}
