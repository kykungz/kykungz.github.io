import React, { Component } from 'react'

import NavBar from './components/NavBar'
import Header from './components/Header'
import Profile from './components/Profile'
import Personal from './components/Personal'
import Skill from './components/Skill'
import Experience from './components/Experience'
import Achievement from './components/Achievement'
import Project from './components/Project'
import Contact from './components/Contact'

import withSection from './hocs/withSection'

const PersonalSection = withSection(Personal)
const SkillSection = withSection(Skill)
const ExperienceSection = withSection(Experience)
const AchievementSection = withSection(Achievement)
const ProjectSection = withSection(Project)
const ContactSection = withSection(Contact)

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
        <AchievementSection title="Achievements" icon="star"/>
        <ProjectSection title="Projects" icon="th"/>
        <ContactSection title="Contact" icon="send"/>
      </div>
    )
  }
}

export default App
