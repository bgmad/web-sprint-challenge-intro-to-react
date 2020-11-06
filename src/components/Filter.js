import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
    width: 75%;
    /* background: grey; */
    display: flex;
    justify-content: center;
`;

const Input = styled.input`
    width: 100%;
    height: 3rem;
    font-size: 1.7rem;
    border: none;
    background: #f5f5f5;
    /* margin: 10px; */
`;

export default function ( { setNameFilter }) {
  
    const filterData = () => {
        setNameFilter(document.getElementById('search').value);
    } 
    return (
        <FilterContainer>
            <Input id='search'></Input>
            <button onClick={filterData}>Search</button>
        </FilterContainer>
    );
}