import styled from 'styled-components'

export const ChoicesListItem = styled.li`
  list-style-type: none;
  margin: 5px;

  @media (min-width: 768px) {
    margin: 10px;
  }
`

export const ListItemBtn = styled.button`
  background-color: transparent;
  padding: 0px;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const ListItemBtnImage = styled.img`
  width: 120px;

  @media (min-width: 768px) {
    width: 180px;
  }
`
