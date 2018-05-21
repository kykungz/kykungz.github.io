import React from 'react'
import styled from 'styled-components'
import skills from './model'

const Framework = styled.div`
  font-size: 18px;
  margin-bottom: 8px;
`
const Line = styled.div`
  margin: 20px 0;
`
const Progress = styled.div`
  height: 1.2rem !important;
`

const Skill = () => (
  <div className='container content-container'>
    { skills.map((skill, i) =>
      <Line key={i} className='row no-gutters align-items-center'>
        <div className='col-sm-4'>
          <h3 className='mb-0'>
            <i className={skill.icon} />
            <b className='ml-2'>{ skill.language }</b>
          </h3>
        </div>
        <div className='col-sm-8'>
          <Framework>{ skill.frameworks }</Framework>
          <Progress className='progress'>
            <div
              className={`progress-bar bg-${skill.variant}`}
              role='progressbar' style={{width: `${skill.level}%`}}
              aria-valuemin='0'
              aria-valuemax='100'
            />
          </Progress>
        </div>
      </Line>
    ) }
  </div>
)

export default Skill
