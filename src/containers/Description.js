import styled from 'styled-components';

const Description = styled.p`
  padding: 15px;
  background-color: #f7f7f7;
  border-radius: 20px;
	text-align: ${props => props.centered ? 'center' : 'left'};
  font-size: 18px;
`

export default Description;
