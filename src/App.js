import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppDup from "./AppDup7";

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
        <AppDup />
      </div>
    );
  }
}

export default App;
