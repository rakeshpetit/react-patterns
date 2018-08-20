import React, { Component } from "react";
import PropTypes from "prop-types";
import Switch from "./switch";

const TOGGLE_CONTEXT = "__toggle__";

export function withToggle(Component) {
    function Wrapper(props, context) {        
        const toggleContext = context[TOGGLE_CONTEXT];
        return (
          <Component {...toggleContext} {...props} />
        );
      }
      Wrapper.contextTypes = {
        [TOGGLE_CONTEXT]: PropTypes.object.isRequired
      };
      return Wrapper;
}

const ToggleOn = withToggle(({ children, on }) => {
  return on ? children : null;
})

const ToggleOff = withToggle(({ children, on }) => {
  return on ? null : children;
})

const ToggleButton = withToggle(({on, toggle, ...props}) => {
    return (
      <div onClick={toggle}>
        <Switch on={on} {...props} />
      </div>
    );
  })

export class Toggle extends Component {
  static On = ToggleOn;
  static Off = ToggleOff;
  static Button = ToggleButton;
  static defaultProps = { onToggle: () => {} };
  static childContextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired
  };
  state = { on: false };
  toggle = () => {
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on);
      }
    );
  };
  getChildContext() {
    return {
      [TOGGLE_CONTEXT]: {
        on: this.state.on,
        toggle: this.toggle
      }
    };
  }
  render() {
    console.log("this.props.children", this.props.children);

    return <div>{this.props.children}</div>;
  }
}

export default Toggle;
