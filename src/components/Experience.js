import React from 'react';
import styled from 'styled-components';
import { experiences } from '../assets/data'

const ImageList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const Image = styled.img`
  max-width: 180px !important;
  max-height: 100px;
  margin: 20px;
`

const Experience = () => (
  <div className="container-fluid">
    { experiences.map((exp, i) =>
      <div key={i} className="row">
        <ImageList className="col-sm-3">
          <Image className="mx-auto img-fluid" key={i} src={exp.image} alt={exp.alt} />
        </ImageList>
        <div className="col-sm-9">
          <h4 className="text-center text-sm-left">
            <b>{ exp.position }</b>
            <span className="d-none d-md-inline">&nbsp;</span>
            <br className="d-block d-md-none"/>
            <span className="badge badge-dark">@{ exp.company }</span>
          </h4>
          <ul className="mb-0">
            { exp.info.map((info, i) =>
              <li key={i} className="lead my-2">{ info }</li>
            ) }
          </ul>
        </div>
      </div>
    ).reduce((prev, curr) => [prev, <hr />, curr]) }
  </div>
)

export default Experience;
