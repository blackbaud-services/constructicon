import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { stylesToClasses, addKeyframes } from '../../lib/css'
import * as defaultTraits from '../../lib/traits'

/**
 * Higher order component to take a styles function and call it with the necessary props and traits
 */
const withStyles = (styles, keyframes = {}) => ComponentToWrap => {
  class ConnectStyles extends Component {
    render () {
      // Get current traits and defaults from context
      const { traits = defaultTraits } = this.context

      // Build our combined props from the component itself's default props,
      // The specified default traits, and the actual provided props
      const combinedProps = {
        ...ComponentToWrap.defaultProps,
        ...this.props
      }

      // Add any keyframes
      const keyframesIsFunction = typeof keyframes === 'function'
      const keyframesObject = keyframesIsFunction
        ? keyframes(combinedProps, traits)
        : keyframes
      const keyframeNames = addKeyframes(keyframesObject)

      // Opt out of built-in styles
      if (typeof this.props.classNames === 'object') {
        const newProps = {
          ...combinedProps,
          styles: {},
          classNames: this.props.classNames
        }

        return <ComponentToWrap {...newProps} />
      }

      // If styles is a function, call it and pass through our props and traits
      const stylesIsFunction = typeof styles === 'function'
      const stylesObject = stylesIsFunction
        ? styles(combinedProps, traits, keyframeNames)
        : styles

      // Build out our final props to be passed down to the original component
      const newProps = {
        ...combinedProps,
        styles: stylesObject,
        classNames: stylesToClasses(stylesObject)
      }

      return <ComponentToWrap {...newProps} />
    }
  }

  ConnectStyles.contextTypes = {
    traits: PropTypes.object
  }

  return ConnectStyles
}

export default withStyles
