import React from "react";

const withToggle = (Component) => {
  class toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = { toggled: props.toggled };
      this.handleToggle = this.handleToggle.bind(this);
      this.handleToggleOn = this.handleToggleOn.bind(this);
      this.handleToggleOff = this.handleToggleOff.bind(this);
    }

    handleToggle() {
      this.setState({ toggled: !this.state.toggled });
    }

    handleToggleOn() {
      this.setState({ toggled: true });
    }

    handleToggleOff() {
      this.setState({ toggled: false });
    }

    render() {
      return (
        <Component
          {...this.props}
          toggled={this.state.toggled}
          onToggle={this.handleToggle}
          onToggleOn={this.handleToggleOn}
          onToggleOff={this.handleToggleOff}
        />
      );
    }
  }

  return toggle;
};

export default withToggle;
