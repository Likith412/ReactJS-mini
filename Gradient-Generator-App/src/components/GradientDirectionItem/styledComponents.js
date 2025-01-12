import styled from 'styled-components'

export const DirectionsListItem = styled.li`
  list-style-type: none;
  padding: 5px;
  width: 50%;
  @media (min-width: 768px) {
    width: 25%;
  }
`

export const TabButton = styled.button`
  background-color: #ededed;
  opacity: ${props => (props.isSelected ? 1 : 0.5)};
  border-style: none;
  border-radius: 5px;
  height: 40px;
  width: 100%;
  cursor: pointer;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  color: #334155;
`
