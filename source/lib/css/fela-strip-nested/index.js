export default () => (styles) => (
  Object.keys(styles).reduce((result, key) => {
    const isNested = typeof styles[key] === 'object'
    const isCSSSelector = key.indexOf('&') === 0
    const isMediaQuery = key.indexOf('@') === 0
    const isKeyframe = key === 'from' || key === 'to' || key.indexOf('%') !== 0

    return isNested && !isCSSSelector && !isMediaQuery && !isKeyframe
      ? result
      : { ...result, [key]: styles[key] }
  }, {})
)
