import React from 'react'

const withToggle = Component => {
  class toggle extends React.Component {
    constructor (props) {
      super(props)
      this.state = { toggled: props.toggled }
      this.toggle = this.toggle.bind(this)
      this.toggleOn = this.toggleOn.bind(this)
      this.toggleOff = this.toggleOff.bind(this)
    }

    toggle () {
      this.setState({ toggled: !this.state.toggled })
    }

    toggleOn () {
      this.setState({ toggled: true })
    }

    toggleOff () {
      this.setState({ toggled: false })
    }

    render () {
      return (
        <Component
          {...this.props}
          toggled={this.state.toggled}
          onToggle={this.toggle}
          onToggleOn={this.toggleOn}
          onToggleOff={this.toggleOff}
        />
      )
    }
  }

  return toggle
}

export default withToggle
