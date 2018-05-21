import styled from 'styled-components'

const Description = styled.p`
  padding: 8px 15px;
  background-color: #f7f7f7;
  border-radius: 20px;
  text-align: ${props =>
    (props.centered && 'center') ||
    (props.justified && 'justify') ||
    (props.right && 'right') ||
    'left'};
  font-size: 18px;

  @media (max-width: 575px) {
    font-size: 16px;
  }
`

export default Description
