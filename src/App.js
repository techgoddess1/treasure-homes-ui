import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { Landing } from './home/Landing';
import { About } from './about/About';
import { Signin } from './signin/Signin';
import { Signup } from './signup/Signup';
import { Dashboard } from './dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='p-grid'>
          <Switch>
            <Route exact path='/'>
              <Landing />
            </Route>
            <Route path='/dashboard'>
              <Dashboard />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
            <Route path='/signin'>
              <Signin />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
