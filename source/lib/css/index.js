import { createRenderer } from 'fela'
import { render, renderToMarkup } from 'fela-dom'
import rawWithStyles from '../../components/with-styles'

const renderer = createRenderer()

export const createRule = (styles) => renderer.renderRule(() => styles)

export const stylesToClasses = (styles = {}) => (
  Object.keys(styles).reduce((classNames, styleKey) => ({
    ...classNames,
    [styleKey]: createRule(styles[styleKey])
  }), {})
)

export const addKeyframes = (keyframes = {}) => (
  Object.keys(keyframes).map((keyframe) => renderer.renderKeyframe(() => keyframe))
)

export const withStyles = styles => {
  console.log(
    'Development warning: withStyles should now be imported the same way as other higher order components i.e. import withStyles from `construction/with-styles`. Support for importing from `constructicon/lib/css` will be removed in version 2'
  )
  return rawWithStyles(styles)
}

export const renderServerCSS = () => renderToMarkup(renderer)

export const renderClientCSS = () => render(renderer)
