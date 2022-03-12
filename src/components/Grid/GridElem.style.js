import styled from 'styled-components'

const GridElem = styled.div`
  background-color: lightgray;
  color: #fff;
  padding: 3%;
  font-size: 150%;
  transition: 0.5s;

  &:hover{
    background-color: gray;
  }

  @media (max-width: 667px) {
    display: block;
    margin-bottom: 15px;
    padding: 5px;
    display: grid; 
  }
`

export default GridElem