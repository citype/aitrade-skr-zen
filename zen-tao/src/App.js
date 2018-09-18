import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/HomePage/Homepage.js'
import MyTaskPage from './pages/MyTaskPage/MyTaskPage.js'
import { Router, Route, Switch } from "react-router"

class App extends Component {
  render() {
    let view
    view = (
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/task' component={ MyTaskPage }/>
      </Switch>
    )
    return (
      <div className="App">
      { view }
      </div>
  );
  }
} 

export default App;
