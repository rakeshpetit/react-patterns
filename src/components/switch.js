import React from "react";
import "./switch.css";

const Toggle = props => {
  return (
    <div>
      <label className="switch">
        <input type="checkbox" disabled checked={props.on}/>
        <span className="slider round" />
      </label>
    </div>
  );
};

export default Toggle;
