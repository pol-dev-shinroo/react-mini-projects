import React from "react";
import styled from "styled-components";
import { HashLoader } from "react-spinners";

export const Loading = () => {
    return (
        <Container>
            <HashLoader />
            <LoadingText>Loading...</LoadingText>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LoadingText = styled.h1`
    margin: 0 2rem;
    font-size: 3rem;
`;

export default Loading;
