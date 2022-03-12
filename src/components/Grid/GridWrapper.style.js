import styled from 'styled-components'

const GridElem = styled.div`
    display: grid;
    grid-template-columns: 22% 22% 22% 22%;
    grid-gap: 4%;

    @media (max-width: 667px) {
        display: block;
    }
`

export default GridElem