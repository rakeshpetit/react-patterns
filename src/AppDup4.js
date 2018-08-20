import React from "react";
import { withToggle, Toggle } from "./components/Toggle4";

const MyToggle = withToggle(({ on, toggle }) => (
  <button onClick={toggle}>{on ? "on" : "off"}</button>
));

const AppDup = () => {
  return (
    <Toggle onToggle={on => console.log("toggle", on)}>
      <div>
        <MyToggle />
      </div>
      <Toggle.On>Button is on!!!!</Toggle.On>
      <Toggle.Off>Button is off</Toggle.Off>
      <Toggle.Button />
    </Toggle>
  );
};

export default AppDup;
