import React, { useState, useEffect } from 'react';
import Character from './components/Character.js'
import PageSelector from './components/PageSelector.js'
import styled from 'styled-components';
import axios from 'axios';
import './App.css';

const CharacterList = styled.div`
  display: flex;
  justify-content: center;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  }, [pageNumber]);

  console.log(data);
  
  let cards = [];
  const startId = (data !== null ? data.results[0].id : null);
  const endId = (data !== null ? data.results[data.results.length - 1].id : null);

  for(let i = 0; i < (data !== null && data.results.length); i++)
    cards.push(
      <CharacterList>
        <Character id={data !== null ? data.results[i].id : null} />
      </CharacterList>
    );

  return (
    <div>
      <div className='cards-container'>
        {cards}
      </div>
      <PageSelector pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </div>
  );  
}

export default App;
