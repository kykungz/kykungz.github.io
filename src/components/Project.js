import React from 'react';
import Title from '../containers/Title';
import projects from '../data/projects';
import withSeparator from '../hocs/withSeparator';
import ProjectInfo from './ProjectInfo'

const Project = () => (
  <div className="container-fluid" >
    { withSeparator(projects.map((degree, i) =>
      <React.Fragment key={i}>
        <Title centered variant="dark">{ degree.name }</Title>
        { withSeparator(degree.list.map((project, i) =>
          <ProjectInfo key={i} project={ project } />
        )) }
      </React.Fragment>
    )) }
  </div>
)

export default Project;
