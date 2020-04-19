import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/dashboard/Header';
import Dashboard from './components/dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Dashboard />
      </Fragment>
    );
  }
}

export default App;
