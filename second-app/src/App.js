import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Calc } from './container/Calc';
import './App.css'


export default class App extends Component{
  render(){
    return(
      <>
        <Calc/>
      </>
    );
  }
}

