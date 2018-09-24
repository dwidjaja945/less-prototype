import React, { Component } from 'react';
import { Route } from "react-router-dom";
import logo from './logo.svg';
import './styles/styles.css';

// ================== Components ==================
import Header from './components/header';
import InfoContainer from './components/info_container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="hello">
          <p>I'm Jasmine Li</p>
        </div>
        <InfoContainer />
      </div>
    );
  }
}

export default App;
