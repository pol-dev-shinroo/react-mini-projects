import React from "react";
import styled from "styled-components";
import questions from "./data";
import Question from "./components/Question";

const Accordion = () => {
    return (
        <Wrapper>
            <Main>
                <Title>questions and answers about login</Title>
                {questions.map((question) => {
                    const { id, ...data } = question;
                    return <Question key={id} {...data} />;
                })}
            </Main>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #4b145b;
    height: 100vh;
`;

const Main = styled.div`
    width: 90vw;
    padding: 2.5rem 2rem;
    display: grid;
    grid-gap: 1rem 2rem;
    gap: 1rem 2rem;
    border-radius: 0.25rem;
    background: white;
    max-width: 920px;
    margin: 5rem auto;
`;

const Title = styled.h2`
    text-transform: capitalize;
    margin-bottom: 1rem;
`;
export default Accordion;
