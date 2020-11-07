import React from 'react';
import styled from 'styled-components';

const PageSelectorContainer = styled.div`
    width: 75%;
    display: flex;
    justify-content: space-between;
    margin: 20px 0px;
`;

const buttonStyle = {
    width: '30%',
    height: '40px',
    borderRadius: '10px 10px',
    background: 'white',
    border: 'none',
    fontWeight: 'bold',
};

export default function PageSelector({ pageNumber, setPageNumber}) {
    return (
        <PageSelectorContainer>
            <button onClick={() => setPageNumber(pageNumber - 1)} style={buttonStyle}>Previous</button>
            <p>{pageNumber}</p>
            <button onClick={() => setPageNumber(pageNumber + 1)} style={buttonStyle}>Next</button>
        </PageSelectorContainer>
    );
};