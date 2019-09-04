import React, { Component } from "react";
import AppTamimi from "./AppTamimi";
import AppOsaid from "./AppOsaid";
import Home from "./components/Home";
import "./App.css";
import NavBar from "./components/NavBar";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <AppOsaid /> */}
        {/* <button onClick={this.checkServer}>Checking server</button> 
                           <AppTamimi/>
         <AppSharafalden/>*/}
        {/* <AppTamimi /> */}
        <NavBar />
      </div>
    );
  }
}
/*
test 
import React, { Component } from "react";
import "./App.css";
import AppSharafalden from "./components/AppSharafalden";
import axios from "axios";
import Home from './components/Home'
import NavBar from "./components/NavBar";
class App extends Component {
  state = {};
*/
