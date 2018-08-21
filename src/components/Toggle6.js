import React, { Component } from "react";
import PropTypes from "prop-types";
import Switch from "./switch";

const TOGGLE_CONTEXT = "__toggle__";

export function withToggle(Component) {
    function Wrapper(props, context) {        
        const toggleContext = context[TOGGLE_CONTEXT];
        return (
          <Component {...props} toggle={toggleContext}  />
        );
      }
      Wrapper.contextTypes = {
        [TOGGLE_CONTEXT]: PropTypes.object.isRequired
      };
      Wrapper.displayName = `withToggle(${Component.displayName || Component.name})`;
      return Wrapper;
}

const ToggleOn = (props) => {
  console.log('ToggleOn', props);    
  const { toggle: { on }, children }  = props;
  return on ? children : null;
}

const ToggleOff = (props) => {
    console.log('ToggleOff', props);    
    const { toggle: { on }, children }  = props;
    return on ? null : children;
}

const ToggleButton = (props) => {
    console.log('ToggleButton', props); 
    const { toggle: {on, toggle}, ...otherProps} = props;
    return (
      <div onClick={toggle}>
        <Switch on={on} {...otherProps} />
      </div>
    );
  }

export class Toggle extends Component {
  static On = withToggle(ToggleOn);
  static Off = withToggle(ToggleOff);
  static Button = withToggle(ToggleButton);
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
