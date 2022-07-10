import React, { useState } from "react";
import styled from "styled-components";
import { data } from "./data";
import List from "./components/List";

const Birthday = () => {
    const [people, setPeople] = useState(data);

    const deleteAll = () => {
        setPeople([]);
    };
    return (
        <FlexBox>
            <Container>
                <Title>{people.length} birthday today</Title>
                {people.map((person) => {
                    const { id, ...props } = person;
                    return <List key={id} {...props} />;
                })}
                <Button onClick={deleteAll}>clear all</Button>
            </Container>
        </FlexBox>
    );
};

const FlexBox = styled.div`
    height: 100vh;
    background: #f28ab2;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    max-width: 500px;
    width: 90vw;
    margin: 5rem 0;
    background: white;
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
    h3 {
        font-weight: normal;
        text-transform: capitalize;
        margin-bottom: 2rem;
    }
`;

const Title = styled.h3`
    font-size: 1.25rem;
`;

const Button = styled.button`
    color: white;
    display: block;
    width: 100%;
    border-color: transparent;
    background: #f28ab2;
    margin: 2rem auto 0 auto;
    text-transform: capitalize;
    font-size: 1.2rem;
    padding: 0.5rem 0;
    letter-spacing: 0.1rem;
    border-radius: 0.25rem;
    outline: 1px solid rgba(242, 138, 178, 0.8);
    cursor: pointer;
`;

export default Birthday;
