import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cxs from 'cxsync'
import * as defaultTraits from '../traits'

export const css = cxs

/**
* Turns a styles object into an object containing the cxs class name for each key
*/
export const stylesToClasses = (styles = {}) => (
  Object.keys(styles).reduce((acc, key) => ({
    ...acc,
    [key]: css(styles[key])
  }), {})
)

/**
* Higher order component to take a styles function and call it with the necessary props and traits
*/
export const withStyles = (styles) => (ComponentToWrap) => {
  class ConnectStyles extends Component {
    render () {
      // get current traits and defaults from context
      const {
        traits = defaultTraits
      } = this.context

      // build our combined props from the component itself's default props,
      // the specified default traits, and the actual provided props
      const combinedProps = {
        ...ComponentToWrap.defaultProps,
        ...this.props
      }

      // if styles is a function, call it and pass through our props and traits
      const stylesIsFunction = typeof styles === 'function'
      const stylesObj = stylesIsFunction ? styles(combinedProps, traits) : styles

      // build out our final props to be passed down to the original component
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
