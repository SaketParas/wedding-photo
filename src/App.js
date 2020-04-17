import React, { Component } from 'react';
import './App.css';
import Home from './Component/Home';
import Family from './Component/Family';
import Mehndi from './Component/Mehndi';
import Engagement from './Component/Engagement';
import Navbar from './Component/Navbar';
import {Route, BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
          <Route exact path="/" render={props => <Home {...props}/>}/>
          <Route  path="/Mehndi" render={props => <Mehndi {...props}/>}/>
          <Route  path="/Engagement" render={props => <Engagement {...props}/>}/>
          <Route  path="/Family" render={props => <Family {...props}/>}/>
          <Route  path="/Navbar" render={props => <Navbar {...props}/>}/>
        </BrowserRouter>
    </div>
    )
  }
}

export default App
