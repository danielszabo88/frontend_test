import { useState, useEffect } from 'react'

import GridWrapper from './Grid/GridWrapper.style'
import GridElem from './Grid/GridElem.style'
import GridElemImg from './Grid/GridElemImg.style'
import GridElemName from './Grid/GridElemName.style'
import GridElemInfo from './Grid/GridElemInfo.style'
import GridElemTxt from './Grid/GridElemTxt.style'

const Grid = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [elemToLoad, setElemToLoad] = useState(12)

  useEffect(() => {
    setFetchedData([])
    for(let i=1; i<=12; i++){
      fetch(`https://rickandmortyapi.com/api/character/${i}`)
        .then(response => response.json())
        .then(data => {
          setFetchedData((fetchedData => [...fetchedData, {
            name: data.name,
            gender: data.gender,
            status: data.status,
            species: data.species,
            image: data.image
          }]))
        });
    }
  }, []);

  return (
    <GridWrapper>
      {fetchedData.length<elemToLoad ? <div>Data is Loading</div> :
        fetchedData.map(elem => (
          <GridElem>
            <GridElemImg src={elem.image}></GridElemImg>
            <GridElemTxt>
              <GridElemName>{elem.name}</GridElemName>
              <GridElemInfo>Gender: {elem.gender}</GridElemInfo>
              <GridElemInfo>Status: {elem.status}</GridElemInfo>
              <GridElemInfo>Species: {elem.species}</GridElemInfo>
            </GridElemTxt>
          </GridElem>
        )) 
    }
    </GridWrapper>
  )
}

export default Grid