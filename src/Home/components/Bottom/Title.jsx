import React from "react";
import styled from "styled-components";

const Title = () => {
    return (
        <TitleContainer>
            <H2>projects</H2>
            <Underline />
        </TitleContainer>
    );
};

const TitleContainer = styled.div`
    text-align: center;
    margin-bottom: 3rem;
`;

const H2 = styled.h2`
    text-transform: uppercase;
    font-size: 2.441rem;
    margin: 0 0 1.38rem;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: 1px;
`;

const Underline = styled.div`
    height: 0.2rem;
    width: 7rem;
    background: #60dbfb;
    margin: -1rem auto 0px;
`;

export default Title;
