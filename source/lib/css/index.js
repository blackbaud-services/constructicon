import React from 'react'
import reverse from 'lodash/reverse'
import { createRenderer } from 'fela'
import { mediaQuery } from '../traits'
import { rehydrate, render, renderToSheetList } from 'fela-dom'
import fallback from 'fela-plugin-fallback-value'
import prefixer from 'fela-plugin-prefixer'
import stripNested from './fela-strip-nested'

const plugins = [ stripNested(), prefixer(), fallback() ]
const renderer = createRenderer({ plugins })

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
  renderToSheetList(renderer).map((sheet) => (
    <style
      type='text/css'
      data-fela-rehydration={sheet.rehydration}
      data-fela-type={sheet.type}
      media={sheet.media}
      dangerouslySetInnerHTML={{ __html: sheet.css }}
    />
  ))
)

export const configureMediaQueries = (breakpoints = []) => {
  createRule({ display: 'block' })
  breakpoints.map((breakpoint) => createRule({ [mediaQuery(breakpoint)]: { display: 'block' } }))
  reverse(breakpoints).map((breakpoint) => createRule({ [mediaQuery(breakpoint, 'max-width')]: { display: 'block' } }))
}

if (typeof window !== 'undefined') {
  const serverRenderedCSS = document.querySelectorAll('style[data-fela-rehydration]')
  serverRenderedCSS.length && rehydrate(renderer)
  render(renderer)
}
