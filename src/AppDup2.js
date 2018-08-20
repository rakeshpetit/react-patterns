import React from "react";
import { Toggle } from "./components/Toggle2";

const AppDup = () => {
  return (
    <Toggle onToggle={on => console.log("toggle", on)}>      
      <Toggle.On>Button is on!!!!</Toggle.On>            
      <Toggle.Button />
      <Toggle.Off>Button is off</Toggle.Off>      
    </Toggle>
  );
};

export default AppDup;
