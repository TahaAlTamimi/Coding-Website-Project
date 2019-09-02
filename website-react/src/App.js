import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {};

  checkServer = () => {
    axios.get("http://localhost:9000/posts/").then(res => {
      console.log(res.data);
    });
  };
  render() {
    return (
      <>
        <h1>Working Fine</h1>
        <button onClick={this.checkServer}>Checking server</button>
      </>
    );
  }
}

export default App;
