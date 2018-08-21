import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Challenge from './container/Challenge'

import './App.css';

const Home = () => (
  <div className="home">
    <div className="copy">
      <h1>1000 Challenge</h1>
      <p>Work up to doing 1,000 pushups in a single day.</p>
      <Link to="/challenge" className="btn">Join the 1,000 pushup challenge</Link>
    </div>
  </div>
)

const PushupsChallenge = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/challenge" component={Challenge}/>
    </div>
  </Router>
)
export default PushupsChallenge
