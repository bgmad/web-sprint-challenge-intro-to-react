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
    padding: 0px 10px;
`;

export default function ( { setNameFilter }) {
    return (
        <FilterContainer>
            <Input id='search'></Input>
            <button onClick={() => setNameFilter('')}>Reset</button>
            <button onClick={() => setNameFilter(document.getElementById('search').value)}>Search</button>
        </FilterContainer>
    );
}