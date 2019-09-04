import React, { Component } from 'react'

import AppOsaid from './AppOsaid';

export default class App extends Component {
    render() {
        return (
            <div>
                <AppOsaid />
                {/* <button onClick={this.checkServer}>Checking server</button> 
                           <AppTamimi/>
         <AppSharafalden/>*/}
            </div>
        )
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
