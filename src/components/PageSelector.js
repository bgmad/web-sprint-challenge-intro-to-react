import React from 'react';
import styled from 'styled-components';

const PageSelectorContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

export default function PageSelector({ pageNumber, setPageNumber}) {
    return (
        <PageSelectorContainer>
            <button onClick={() => setPageNumber(pageNumber - 1)}>Previous</button>
            <p>{pageNumber}</p>
            <button onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
        </PageSelectorContainer>
    );
};