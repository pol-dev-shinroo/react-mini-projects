import React from "react";
import styled from "styled-components";

const Title = () => {
    return (
        <Heading>
            <TitleText>experience</TitleText>
            <Underline />
        </Heading>
    );
};
const Heading = styled.div`
    margin-bottom: 4rem;
    text-align: center;
`;

const TitleText = styled.h2`
    font-size: 2rem;
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
    letter-spacing: 0.1rem;
`;

const Underline = styled.div`
    width: 5rem;
    height: 0.25rem;
    margin-bottom: 1.25rem;
    background: #2caeba;
    background: #2caeba;
    margin-left: auto;
    margin-right: auto;
`;
export default Title;
