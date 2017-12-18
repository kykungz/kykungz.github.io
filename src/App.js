import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Profile from './components/Profile';
import Section from './containers/Section';
import Personal from './components/Personal';

class App extends Component {
  render() {
    return (
      <div id="App">
        <NavBar />
        <Header />
        <Profile />
        <Section title="Personal Information" icon="user-circle-o">
          <Personal />
        </Section>
      </div>
    );
  }
}

export default App;
