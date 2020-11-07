// Write your Character component here
import React, {useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CharacterCard = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
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
`;

const InfoContainer = styled.div`
    align-self: center;
    width: 90%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 0px 30px;

    @media (max-width: 650px) {
        flex-direction: column;
        align-items: center; 
    }
`;

const InfoTextContainer = styled.div`
    margin: 0 20px;
    
    @media (max-width: 650px) {
        margin: 20px 0px;
        text-align: center;
    }
`;


export default function Character({ id }) {
    
    const [data, setData] = useState(null);
    const [showInfo, setShowInfo] = useState(false);
    
    useEffect(() => {
        axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [id]);
    
    const displayInfo = () => {
        setShowInfo(!showInfo);
    }
    
    const buttonStyle = {
        width: '40px',
        height: '40px',
        borderRadius: '10px 10px',
        fontSize: '1.5rem',
        background: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'center',
    };

    const info = (
      <InfoContainer>
          <img src={data !== null && data.image} alt={data !== null && data.name} style={{width: '100%'}}></img>
          <InfoTextContainer>
            {data !== null && <div>Created: {data.created}</div>}  
            {data !== null && <div>Total Episodes: {data.episode.length}</div>}  
            {data !== null && <div>Gender: {data.gender}</div>}  
            {data !== null && <div>Location: {data.location.name}</div>}  
            {data !== null && <div>Origin: {data.origin.name}</div>}  
            {data !== null && <div>Species: {data.species}</div>}  
            {data !== null && <div>Status: {data.status}</div>}  
          </InfoTextContainer>
      </InfoContainer>
    )


    return (
        <CharacterCard>
            <CharacterCardHeader onClick={displayInfo}>
                {data !== null && <h2>{data.name}</h2>}
                {data !== null && <button style={buttonStyle} onClick={displayInfo}>{showInfo ? '-' : '+'}</button>}
            </CharacterCardHeader>
            {showInfo && info}
        </CharacterCard>
    );
}