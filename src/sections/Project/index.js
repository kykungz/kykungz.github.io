import React, { Fragment } from 'react'
import withSeparator from '../../hocs/withSeparator'
import Title from '../../components/Title'
import ProjectInfo from '../../components/ProjectInfo'
import projects from './model'

const Project = () => (
  <div className='container-fluid' >
    { withSeparator(projects.map((degree, i) =>
      <Fragment key={i}>
        <Title centered variant='dark'>{ degree.name }</Title>
        { withSeparator(degree.list.map((project, i) =>
          <ProjectInfo key={i} project={project} />
        )) }
      </Fragment>
    )) }
  </div>
)

export default Project
