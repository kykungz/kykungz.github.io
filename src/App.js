import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Profile from './components/Profile';
import Personal from './components/Personal';
import Skill from './components/Skill';
import Experience from './components/Experience';

import sectionWrapper from './hocs/sectionWrapper';

const PersonalSection = sectionWrapper(Personal)
const SkillSection = sectionWrapper(Skill)
const ExperienceSection = sectionWrapper(Experience)

class App extends Component {
  render() {
    return (
      <div id="App">
        <NavBar />
        <Header />
        <Profile />
        <PersonalSection title="Personal Information" icon="user-circle-o" />
        <SkillSection title="Skills" icon="tasks" />
        <ExperienceSection title="Working Experiences" icon="briefcase" />
        <hr/>
      </div>
    );
  }
}

export default App;
