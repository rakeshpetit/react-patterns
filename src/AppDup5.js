import React from "react";
import { withToggle, Toggle } from "./components/Toggle5";


const MyEventComponent = withToggle(({toggle, on, event }) => {
  const props = {[event] : on}
  return toggle.on ? (<button {...props}>The {event} event</button>) : null; 
});

const MyToggle = withToggle(({toggle: { on, toggle }}) => (
  <button onClick={toggle}>{on ? "on" : "off"}</button>
));

const AppDup = () => {
  return (
    <Toggle onToggle={on => console.log("toggle", on)}>
      <div>
        <MyToggle />
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
