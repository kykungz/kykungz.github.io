import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Profile from './components/Profile';
import Personal from './components/Personal';

import sectionWrapper from './hocs/sectionWrapper';

const PersonalSection = sectionWrapper(Personal)

class App extends Component {
  render() {
    return (
      <div id="App">
        <NavBar />
        <Header />
        <Profile />
        <PersonalSection title="Personal Information" icon="user-circle-o" />
      </div>
    );
  }
}

export default App;
