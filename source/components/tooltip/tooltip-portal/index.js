import { Component } from 'react'
import { createPortal } from 'react-dom'

class TooltipPortal extends Component {
  constructor () {
    super(...arguments)
    this.anchor = document.createElement('div')
  }

  componentDidMount () {
    document.body.appendChild(this.anchor)
  }

  componentWillUnmount () {
    document.body.removeChild(this.anchor)
  }

  render () {
    return createPortal(this.props.children, this.anchor)
  }
}

export default TooltipPortal
