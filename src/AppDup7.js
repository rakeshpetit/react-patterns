import React, { Component } from "react";
import { withToggle, Toggle } from "./components/Toggle7";


const MyEventComponent = withToggle(({toggle, on, event }) => {
  const props = {[event] : on}
  return toggle.on ? (<button {...props}>The {event} event</button>) : null; 
});

class MyToggle extends Component {
    focus = () => this.button.focus()
    render() {
        const { toggle: { on, toggle }} = this.props;
        return (<button 
            onClick={toggle}
            ref = {button => (this.button = button)}>
            {on ? "on" : "off"} 
            </button>);
    }
}

const MyToggleWrapper = withToggle(MyToggle);

const AppDup = () => {
  return (
    <Toggle onToggle={on => on ? this.myToggle.focus() : null}>
      <div>
        <MyToggleWrapper innerRef={myToggle => this.myToggle = myToggle}/>
      </div>
      <hr />
      <Toggle.On>Button is on!!!!</Toggle.On>
      <Toggle.Off>Button is off</Toggle.Off>
      <hr />
      <Toggle.Button />
      <hr />
      <MyEventComponent 
      event="onClick" 
      on={e => alert(e.type)} />
    </Toggle>
  );
};

export default AppDup;
