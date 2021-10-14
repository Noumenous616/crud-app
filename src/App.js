import React, { Component } from 'react';
import './App.css';
import {Main} from './components/main'
import {Add} from './components/Add'
import {Edit} from './components/Edit'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {GlobalProvider} from '../src/context/State'

let App = () => {

    return (
      <div style={{maxWidth: '30rem', margin: '5rem auto'}}>
          <GlobalProvider>
              <Router basename={process.env.PUBLIC_URL}>
                  <Switch>
                      < Route exact path='/' component={Main}  />
                      < Route path='/add' component={Add} />
                      < Route path='/edit/:id' component={Edit} />
                  </Switch>

              </Router>
          </GlobalProvider>


      </div>
    );

}

export default App;
