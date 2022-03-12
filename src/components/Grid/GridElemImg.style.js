import styled from 'styled-components'

const GridElem = styled.img`
    width: 30%;
    float: left;

    @media (max-width: 667px) {
      width: 90%;
      padding: 5px;
      display: block;
      margin: 0 auto;
      float: inherit;
  }
`

styled.img.attrs(props => ({
    alt:"Profile",
    src:props.link,
  }))

export default GridElem