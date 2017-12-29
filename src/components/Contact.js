import React from 'react'
import withName from '../hocs/withName'
import contacts from '../data/contacts'
import FontAwesome from 'react-fontawesome'
import styled from 'styled-components'

const Link = styled.a`
  display: block;
  text-decoration: none !important;
  font-size: 1.4em;
  background-color: whitesmoke;
  border-radius: 20px;
  padding: 4px 0;
  transition: all 200ms;

  &:hover {
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
      <Link key={i} href={ contact.link }>
        <FontAwesome className="mr-2" name={ contact.icon } />
        { contact.name }
      </Link>
    ) }
  </Grid>
)

export default withName(Contact)
