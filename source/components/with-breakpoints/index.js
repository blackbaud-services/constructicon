import React from "react";
import { breakpoints } from "../../lib/traits";

const withBreakpoints = (Component) =>
  class extends React.Component {
    constructor() {
      super();
      this.state = { xs: null, sm: null, md: null, lg: null, xl: null };
      this.checkBreakpointMatches = this.checkBreakpointMatches.bind(this);
      this.setBreakpoints = this.setBreakpoints.bind(this);
    }

    componentDidMount() {
      this.setBreakpoints();
      window.addEventListener("resize", this.setBreakpoints);
    }

    componentWillUnMount() {
      window.removeEventListener("resize", this.setBreakpoints);
    }

    checkBreakpointMatches() {
      return Object.keys(breakpoints).reduce(
        (acc, size) => {
          const matches = window.matchMedia(
            `(min-width: ${breakpoints[size]})`
          ).matches;

          return {
            ...acc,
            [size]: matches,
            current: matches ? size : acc.current,
          };
        },
        { current: "xs" }
      );
    }

    setBreakpoints() {
      this.setState(this.checkBreakpointMatches);
    }

    render() {
      return <Component {...this.props} breakpoints={this.state} />;
    }
  };

export default withBreakpoints;
