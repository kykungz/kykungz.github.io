import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Description from './Description'

const TagContainer = styled.span`
  font-size: 20px;

  h3 + h3 {
    margin-left: 0.5em;
  }
`

const Name = styled.h3`
  font-weight: bold;
  text-decoration: underline;
`

const ProjectInfo = ({ project }) => (
  <div>
    <div className='mb-2'>
      { project.images.map((image, i) =>
        <div key={i} className='image-container'>
          <img className='img-fluid' src={image} alt={image} />
        </div>
      ) }
    </div>
    <Name className='mr-2 d-inline'>{ project.name }</Name>
    <TagContainer className='d-inline-block'>{ project.tags }</TagContainer>
    {
      project.collaborator &&
      <h6>
        (Collaborator:&nbsp;
        <a rel='noopener noreferrer' target='_blank' href={project.collaborator.site}>
          {project.collaborator.name}
        </a>
        )
      </h6>
    }
    <h3><b className='badge badge-info'>{ project.year }</b></h3>
    <Description>&emsp;{ project.description }</Description>
  </div>
)

ProjectInfo.propTypes = {
  project: PropTypes.object
}

export default ProjectInfo
