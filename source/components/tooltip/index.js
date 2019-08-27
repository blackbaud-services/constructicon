import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PortalComponent from './tooltip-portal'

class Tooltip extends Component {
  constructor () {
    super(...arguments)
    this.ref = null
    this.popup = null
    this.state = {
      hovering: false,
      position: { top: 0, left: 0 }
    }
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.onMouseEnter = this.onMouseEnter.bind(this)
  }

  onMouseEnter () {
    const { top, left, width } = this.ref.getBoundingClientRect()
    const { pageXOffset, pageYOffset } = window
    this.setState({
      hovering: true,
      position: {
        top: top + pageYOffset,
        left: left + pageXOffset + width / 2
      }
    })
  }

  onMouseLeave () {
    this.setState({ hovering: false })
  }

  render () {
    const { position, hovering } = this.state
    const { children } = this.props

    const bindTarget = {
      ref: ref => (this.ref = ref),
      onMouseLeave: this.onMouseLeave,
      onMouseEnter: this.onMouseEnter
    }

    const tooltipStyles = {
      position: 'absolute',
      transform: 'translate(-50%, -0.5em)',
      ...position
    }

    const TooltipPortal = props =>
      hovering ? <PortalComponent {...props} /> : null

    return children(bindTarget, TooltipPortal, tooltipStyles)
  }
}

export default Tooltip

Tooltip.propTypes = {
  /**
   * A function responsible for rendering the hover target and content to appear
   * in the tooltip popup.
   */
  children: PropTypes.func.isRequired
}
