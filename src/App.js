import React, { Component } from 'react';
import TopPanel from './components/TopPanel/TopPanel';
import MainPanel from './components/MainPanel/MainPanel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <TopPanel/>
          <MainPanel/>
      </div>
    );
  }
}

export default App;
