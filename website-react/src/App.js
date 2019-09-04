import React, { Component } from "react";
import "./App.css";
import AppSharafalden from "./components/AppSharafalden";
import axios from "axios";

class App extends Component {
  state = {};

  checkServer = () => {
   axios.post("http://localhost:9000/signIn/sign-in")
   .then( res => {
     console.log(res.data)
   })
  };
  render() {
    return (
      <>
        <h1>Working Fine</h1>
        <button onClick={this.checkServer}>Checking server</button>
        <AppSharafalden/>
      </>
    );
  }
}

export default App;
