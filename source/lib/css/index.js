import React from 'react'
import { createRenderer } from 'fela'
import { rehydrate, renderToSheetList } from 'fela-dom'
import prefixer from 'fela-plugin-prefixer'
import perf from 'fela-perf'
import beautifier from 'fela-beautifier'

const plugins = [ prefixer() ]
const enhancers = process.env.NODE_ENV === 'production' ? [] : [ perf(), beautifier() ]
const renderer = createRenderer({ plugins, enhancers })

export const createRule = (styles) => renderer.renderRule(() => styles)

export const stylesToClasses = (styles = {}) => (
  Object.keys(styles).reduce((classNames, styleKey) => ({
    ...classNames,
    [styleKey]: createRule(styles[styleKey])
  }), {})
)

export const addKeyframes = (keyframes = {}) => (
  Object.keys(keyframes).reduce((keyframeNames, keyframeKey) => ({
    ...keyframeNames,
    [keyframeKey]: renderer.renderKeyframe(() => keyframes[keyframeKey])
  }), {})
)

export const renderServerCSS = () => (
  renderToSheetList(renderer).map((sheet) => console.log(sheet) || (
    <style
      type='text/css'
      data-fela-rehydration={sheet.rehydration}
      data-fela-type={sheet.type}
      media={sheet.media}
      dangerouslySetInnerHTML={{ __html: sheet.css }}
    />
  ))
)

if (typeof window !== 'undefined') {
  rehydrate(renderer)
}
