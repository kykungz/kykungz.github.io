import React from 'react'
import FontAwesome from 'react-fontawesome'
import styled from 'styled-components'
import withName from '../../hocs/withName'
import contacts from './model'

const Link = styled.a`
  display: block;
  font-size: 1.4em;
  background: ${props => props.bg};
  color: ${props => props.color};
  border-radius: 20px;
  padding: 4px 0;
  transition: all 200ms;

  &:hover {
    text-decoration: none;
    color: ${props => props.color};
    filter: brightness(0.9);
    transform: scale(0.95);
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5em;
  text-align: center;
  margin-top: 20px;

  @media (max-width: 575px) {
    grid-template-columns: 1fr;
  }
`

const Contact = () => (
  <Grid>
    { contacts.map((contact, i) =>
      <Link key={i} {...contact}>
        <FontAwesome size={contact.size} className='mr-2' name={contact.icon} />
        {contact.name}
      </Link>
    ) }
  </Grid>
)

export default withName(Contact)
