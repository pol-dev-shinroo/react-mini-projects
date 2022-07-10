import React from "react";
import styled, { keyframes, css } from "styled-components";

const boxFade = keyframes`
    0% {
        transform: scale(1)
    }
    50% {
        transform: scale(1.1)
    }
    100% {
        transform: scale(1)
    }
`;

const TitleContainer = () => {
    return (
        <div>
            <Title>react projects</Title>
            <Text>
                Projects are the most practical way to learn any language, and
                React is no exception. Solidifying my knowledge of React by
                creating these cool projects.
            </Text>
            <Link
                active
                href="https://github.com/pol-dev-shinroo/react-mini-projects"
            >
                See Github
            </Link>
        </div>
    );
};

const Title = styled.h1`
    font-size: 3.052rem;
    margin: 0;
    text-transform: capitalize;
`;
const Text = styled.p`
    max-width: 40em;
    font-size: 1.25rem;
    margin: 2rem 0px;
    color: #0f172a;
`;

const Link = styled.a`
    display: inline-block;
    text-decoration: none;
    background: #60dbfb;
    text-transform: uppercase;
    padding: 0.75rem 1.25rem;
    border: 2px solid #60dbfb;
    font-weight: 500;
    color: black;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    cursor: pointer;
    border-radius: 0.25rem;
    appearance: none;
    letter-spacing: 1px;
    transition: 0.3s ease-in-out all;
    ${({ active }) =>
        active &&
        css`
            animation: 2s ${boxFade} ease 0s infinite normal none running;
        `};
    :hover {
        background: white;
        color: #60dbfb;
    }
`;

export default TitleContainer;
