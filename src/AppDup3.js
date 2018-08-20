import React from "react";
import { Toggle } from "./components/Toggle3";

const AppDup = () => {
  return (
    <Toggle onToggle={on => console.log("toggle", on)}>  
        <span>          
      <Toggle.Button />
      <Toggle.On>Button is on!!!!</Toggle.On>
      </span>
      <p >      
      <Toggle.Off>Button is off</Toggle.Off>      
      </p>      
    </Toggle>
  );
};

export default AppDup;
