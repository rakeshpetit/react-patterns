import React, { Component } from "react";
import Switch from "./switch";

function ToggleOn({ on, children }) {
  return on ? children : null;
}

function ToggleOff({ on, children }) {
  return on ? null : children;
}

function ToggleButton({ on, toggle, ...props }) {
  return (
    <div onClick={toggle}>
      <Switch on={on} {...props} />
    </div>
  );
}

export class Toggle extends Component {
  static On = ToggleOn;
  static Off = ToggleOff;
  static Button = ToggleButton;
  static defaultProps = { onToggle: () => {} };
  state = { on: false };
  toggle = () => {
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on);
      }
    );
  };
  render() {
    const children = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        on: this.state.on,
        toggle: this.toggle
      })
    );
    console.log('children', children, this.state);
    return <div>{children}</div>;
  }
}

export default Toggle;
