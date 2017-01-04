import React, { Component, PropTypes } from 'react'
import cxs from 'cxsync'
import * as defaultTraits from '../traits'

export const css = cxs

export const stylesToClasses = (styles = {}) => (
  Object.keys(styles).reduce((acc, key) => ({
    ...acc,
    [key]: css(styles[key])
  }), {})
)

export const withStyles = (styles) => (ComponentToWrap) => {
  class ConnectStyles extends Component {
    render () {
      const {
        traits = defaultTraits
      } = this.context

      const combinedProps = {
        ...ComponentToWrap.defaultProps,
        ...this.props
      }

      const stylesIsFunction = typeof styles === 'function'
      const stylesObj = stylesIsFunction ? styles(combinedProps, traits) : styles

      const newProps = {
        ...combinedProps,
        styles: stylesObj,
        classNames: stylesToClasses(stylesObj)
      }

      return (
        <ComponentToWrap
          {...newProps}
        />
      )
    }
  }

  ConnectStyles.contextTypes = {
    traits: PropTypes.object
  }

  return ConnectStyles
}
