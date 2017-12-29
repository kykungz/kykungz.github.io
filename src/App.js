import React, { Component } from 'react'
import { Element, animateScroll as scrollSpy } from 'react-scroll'
import FontAwesome from 'react-fontawesome'

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
  componentDidMount() {
    document.getElementById('App').addEventListener('scroll', scrollSpy.update)
  }

  render() {
    return (
      <div id="App">
        <NavBar />
        <Element name="home">
          <Header />
        </Element>
        <Element name="about">
          <Profile />
          <PersonalSection title="Personal Information" icon="user-circle-o" />
          <SkillSection title="Skills" icon="tasks" />
          <ExperienceSection title="Working Experiences" icon="briefcase" />
        </Element>
        <Element name="achievements">
          <AchievementSection title="Achievements" icon="star"/>
        </Element>
        <Element name="projects">
          <ProjectSection title="Projects" icon="th"/>
        </Element>
        <Element name="contact">
          <ContactSection title="Contact" icon="send"/>
        </Element>
        <p className="text-secondary container content-container text-center text-md-right">
          <FontAwesome name="code" /> with <FontAwesome name="heart" />
          {' '} by Kongpon Charanwattanakit
          <br />
          <small>Last updated: 29<sup>th</sup> Dec 2017</small>
        </p>
      </div>
    )
  }
}

export default App
