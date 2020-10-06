/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home/home'
import Login from './components/login/login';
import PrivateRoute from './components/privateRoute';
import Registration from './components/registration/Registration'
import Event from './components/event/event'
import Nav from './components/nav/nav'
function App() {
  const [name, setName] = useState('')
  return (
    <div className="App">
      <Router>
            <Nav name={name} />
        <Switch>
          <Route exact path="/">
            <Home name={name} />
          </Route>
          <Route path="/login">
            <Login setName={setName} />
          </Route>
          <PrivateRoute path="/register/:nms"name={name}>
                <Registration name={name} />
          </PrivateRoute>
          <PrivateRoute path="/event"name={name}>
                <Event pname={name} />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
