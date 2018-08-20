import React, { Component } from "react";
import PropTypes from "prop-types";
import Switch from "./switch";

const TOGGLE_CONTEXT = "__toggle__";
function ToggleOn({ children }, context) {
  console.log("context on", context);
  const { on } = context[TOGGLE_CONTEXT];
  return on ? children : null;
}
ToggleOn.contextTypes = {
  [TOGGLE_CONTEXT]: PropTypes.object.isRequired
};

function ToggleOff({ children }, context) {
  console.log("context off", context);
  const { on } = context[TOGGLE_CONTEXT];
  return on ? null : children;
}
ToggleOff.contextTypes = {
  [TOGGLE_CONTEXT]: PropTypes.object.isRequired
};

function ToggleButton(props, context) {
  console.log("context button", context);
  const { on, toggle } = context[TOGGLE_CONTEXT];
  return (
    <div onClick={toggle}>
      <Switch on={on} {...props} />
    </div>
  );
}
ToggleButton.contextTypes = {
  [TOGGLE_CONTEXT]: PropTypes.object.isRequired
};

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
