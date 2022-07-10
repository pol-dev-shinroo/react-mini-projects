import React from "react";
import styled from "styled-components";
import { Grid, ImageBox, TitleContainer } from "./Top/index";

const Top = () => {
    return (
        <WrapperContainer>
            <Grid>
                <TitleContainer />
                <ImageBox />
            </Grid>
        </WrapperContainer>
    );
};

const WrapperContainer = styled.div`
    min-height: 40vh;
    min-width: 352px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 0px;
    background: white;
    @media (min-width: 992px) {
        min-height: 60vh;
    }
`;

export default Top;
