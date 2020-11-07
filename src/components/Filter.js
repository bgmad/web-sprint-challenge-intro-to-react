import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
    width: 75%;
    display: flex;
    justify-content: space-between;
    margin: 20px 0px;
`;

const Input = styled.input`
    width: 60%;
    height: 3rem;
    font-size: 1.7rem;
    border: none;
    background: #f5f5f5;
    padding: 0px 10px;

    @media (max-width: 650px) {
        width: 45%;
    }
    `;

const buttonStyle = {
    width: '20%',
    height: '3rem',
    borderRadius: '10px 10px',
    background: 'white',
    border: 'none',
    fontWeight: 'bold',
    display: 'inline-block',
};

export default function ( { setNameFilter }) {
    return (
        <FilterContainer>
            <Input id='search'></Input>
            <button onClick={() => setNameFilter('')} style={buttonStyle}>Reset</button>
            <button onClick={() => setNameFilter(document.getElementById('search').value)} style={buttonStyle}>Search</button>
        </FilterContainer>
    );
}