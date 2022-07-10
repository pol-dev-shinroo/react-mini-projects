import React from "react";
import styled from "styled-components";
import { Title, Grid } from "./index";

const Bottom = () => {
    return (
        <Wrapper>
            <Title />
            <Grid />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 5rem 0px;
    background: #e2e8f0;
    width: 100vw;
    min-width: 352px;
`;

export default Bottom;
