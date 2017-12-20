import React from 'react';
import styled from 'styled-components';
import { experiences } from '../assets/data'
import withSeparator from '../hocs/withSeparator'

const ImageList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const Image = styled.img`
  max-width: 200px !important;
  max-height: 120px;
  margin: 20px;
`

const Experience = () => (
  <div className="container-fluid">
    { withSeparator(experiences.map((exp, i) =>
      <div key={i} className="row">
        <ImageList className="col-sm-4">
          <Image className="mx-auto img-fluid" src={exp.image} alt={exp.alt} />
        </ImageList>
        <div className="col-sm-8">
          <h4 className="text-center text-sm-left">
            <b className="d-block d-md-inline-block">{ exp.position }</b>
            <span className="d-none d-md-inline">&nbsp;</span>
            <span className="badge badge-dark">@{ exp.company }</span>
          </h4>
          <ul className="mb-0">
            { exp.info.map((info, i) =>
              <li key={i} className="lead my-2">{ info }</li>
            ) }
          </ul>
        </div>
      </div>
    )) }
  </div>
)

export default Experience;
