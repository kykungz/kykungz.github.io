import React, { PureComponent } from 'react'
import { animateScroll as scrollSpy } from 'react-scroll'
import ReactGA from 'react-ga'

// Higher-order Components
import withSection from './hocs/withSection'
import withScrollSpy from './hocs/withScrollSpy'

// Standalone Components
import NavBar from './sections/NavBar'
import Header from './sections/Header'
import Profile from './sections/Profile'
import Footer from './sections/Footer'

// Wrapped Components
import Personal from './sections/Personal'
import Skill from './sections/Skill'
import Experience from './sections/Experience'
import Achievement from './sections/Achievement'
import Project from './sections/Project'
import Contact from './sections/Contact'

// Enhanced Components
const PersonalSection = withSection(Personal)
const SkillSection = withSection(Skill)
const ExperienceSection = withSection(Experience)
const AchievementSection = withSection(Achievement)
const ProjectSection = withSection(Project)
const ContactSection = withSection(Contact)

const Home = withScrollSpy('home')(
  <Header key='header' />
)

const About = withScrollSpy('about')(
  <Profile key='profile' />,
  <PersonalSection key='personal' title='Personal Information' icon='user-circle-o' />,
  <SkillSection key='skill' title='Skills' icon='tasks' />,
  <ExperienceSection key='exp' title='Working Experiences' icon='briefcase' />
)

const Achievements = withScrollSpy('achievements')(
  <AchievementSection key='achievements' title='Achievements' icon='star' />
)

const Projects = withScrollSpy('projects')(
  <ProjectSection key='projects' title='Projects' icon='th' />
)

const ContactMe = withScrollSpy('contact')(
  <ContactSection key='contact' title='Contact' icon='send' />
)

class App extends PureComponent {
  componentDidMount () {
    ReactGA.initialize('UA-104879759-1')
    ReactGA.pageview(window.location.pathname + window.location.search)
    document.getElementById('App').addEventListener('scroll', scrollSpy.update)
  }

  render () {
    return (
      <div id='App'>
        <NavBar />
        <Home />
        <About />
        <Achievements />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    )
  }
}

export default App
