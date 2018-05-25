import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Home from './home/home.jsx';
import Registry from './registry/registry.jsx';
import Photos from './photos/photos.jsx';
import Header from './header/header.jsx';
import Details from './details/details.jsx';
import Accommodations from './accommodations/accommodations.jsx';
import Activities from './activities/activities.jsx';

import './index.scss';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home" component={Home} />
          <Route path="/registry" component={Registry} />
          <Route path="/photos" component={Photos} />
          <Route path="/details" component={Details} />
          <Route path="/accommodations" component={Accommodations} />
          <Route path="/activities" component={Activities} />
          <p className="footer">© Ian Driscoll</p>
        </div>
      </Router>
    );
  }
}
