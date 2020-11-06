import React from 'react';
import styled from 'styled-components';

const PageSelectorContainer = styled.div`
    width: 75%;
    display: flex;
    justify-content: space-between;
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