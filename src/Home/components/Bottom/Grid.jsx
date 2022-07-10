import React from "react";
import styled from "styled-components";
import { data } from "../../data";
import List from "./List";

const Grid = () => {
    return (
        <GridContainer>
            {data.map((project) => {
                const { key, ...data } = project;
                return <List key={key} {...data} />;
            })}
        </GridContainer>
    );
};

const GridContainer = styled.div`
    display: grid;
    width: 90vw;
    max-width: 1120px;
    gap: 3rem 2rem;
    margin: 0px auto 2rem;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    min-width: 350px;
`;

export default Grid;
