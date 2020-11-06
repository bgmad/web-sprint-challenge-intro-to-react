// Write your Character component here
import React, {useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function Character({ id }) {
    
  const [data, setData] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  }, [id]);

  console.log(data);

  const displayInfo = () => {
    setShowInfo(!showInfo);
  }

  const info = (
      <div>
        {data !== null && <div>Created: {data.created}</div>}  
        {data !== null && <div>Total Episodes: {data.episode.length}</div>}  
        {data !== null && <div>Gender: {data.gender}</div>}  
        {data !== null && <div>Location: {data.location.name}</div>}  
        {data !== null && <div>Origin: {data.origin.name}</div>}  
        {data !== null && <div>Species: {data.species}</div>}  
        {data !== null && <div>Status: {data.status}</div>}  
      </div>
    )

  const CharacterCard = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
    background: #edede6;
  `;
  
  const CharacterCardHeader = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #edede6;
    padding: 20px 0px;
    line-height: 0px;
  `;

  const buttonStyle = {
      width: '40px',
      height: '40px',
      borderRadius: '50% 50%',
      fontSize: '1.4rem',
      paddingTop: '8px',
      transform: 'rotate(180deg)',
      background: 'white',
      border: 'none',
      fontWeight: 'bold',
  };

    return (
        <CharacterCard>
            <CharacterCardHeader>
                {data !== null && <h2>{data.name}</h2>}
                {data !== null && <button style={buttonStyle} onClick={displayInfo}>^</button>}
            </CharacterCardHeader>
            {showInfo && info}
            
        </CharacterCard>
    )
}