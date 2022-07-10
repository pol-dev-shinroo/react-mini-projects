import React from "react";
import styled from "styled-components";

const Grid = ({ children }) => {
    return <GridContainer>{children}</GridContainer>;
};

const GridContainer = styled.div`
    width: 90vw;
    max-width: 1120px;
    @media (min-width: 992px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        place-items: center;
        gap: 2rem;
    }
`;

export default Grid;
