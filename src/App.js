
import React from 'react';
import {BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom'

import Login from './components/Login';
import Contact from './components/Contact';
import Dashboard from './Dashboard';





function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/" component={Login}/>
        <Route exact path="/Contact" component={Contact}/>
        <Route exact path="/Dashboard" component={Dashboard}/>
        

      </Switch>
    </Router>
  );
}

export default App;
