import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Toggle from "./components/Toggle1";

class App extends Component {
  render() {
    const divStyle = {
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      marginTop: "20px"
    };

    return (
      <div style={divStyle}>
        <Toggle 
        onToggle={on => console.log('toggle',on)}
        />
      </div>
    );
  }
}

export default App;
