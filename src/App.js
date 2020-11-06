import React from 'react';
import Character from './components/Character.js'
import styled from 'styled-components';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  const CharacterList = styled.div`
    display: flex;
    justify-content: center;
  `;

  let cards = [];

  for(let id = 0; id < 10; id++)
    cards.push(
      <CharacterList>
        <Character id={id} />
      </CharacterList>
    );

  console.log(cards);

  return (
    <div>
      {cards}
    </div>
  );
}

export default App;
