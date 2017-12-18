import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <div id="App">
        <NavBar />
        <Header />
        <Profile />
      </div>
    );
  }
}

export default App;
