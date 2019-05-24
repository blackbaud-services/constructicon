import { css as createClass, keyframes as createKeyframe } from 'emotion'

export const stylesToClasses = (styles = {}) =>
  Object.keys(styles).reduce(
    (classNames, styleKey) => ({
      ...classNames,
      [styleKey]: createClass({ ...styles[styleKey], label: styleKey })
    }),
    {}
  )

export const addKeyframes = (keyframes = {}) =>
  Object.keys(keyframes).reduce(
    (keyframeNames, keyframeKey) => ({
      ...keyframeNames,
      [keyframeKey]: createKeyframe(keyframes[keyframeKey])
    }),
    {}
  )

export const renderServerCSS = () =>
  console.log(
    'Import renderServerCSS from constructicon/lib/renderDocument and wrap your server rendered HTML i.e. renderServerCSS(generatedHTMLString)'
  )

export const configureMediaQueries = () =>
  console.log('No longer require configureMediaQueries')
