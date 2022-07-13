import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import data from "./data";

const Lorem = () => {
    const [length, setLength] = useState(0);
    const [texts, setTexts] = useState([]);

    const refContainer = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        let value = parseInt(refContainer.current.value);
        if (value <= data.length) {
            setLength(value);
        }
        if (value > data.length) {
            setLength(data.length);
        }
    };

    useEffect(() => {
        let lorem = data.slice(0, length);
        setTexts(lorem);
    }, [length]);

    return (
        <Container>
            <Wrapper>
                <Title>tired of boring lorem ipsum?</Title>
                <Form onSubmit={handleSubmit}>
                    <Label htmlFor="amount">paragraphs:</Label>
                    <Input
                        type="number"
                        name="amount"
                        id="amount"
                        ref={refContainer}
                        min="0"
                        max="9"
                        defaultValue={length}
                    />
                    <Btn type="submit">Generate</Btn>
                </Form>
                <div>
                    {texts.map((text, index) => {
                        return <Text key={index}>{text}</Text>;
                    })}
                </div>
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
    background: hsl(210, 36%, 96%);
    padding-top: 4rem;
`;

const Wrapper = styled.div`
    padding: 5rem 0;
    width: 90vw;
    margin: 0 auto;
    max-width: 40rem;
    text-align: center;
    color: hsl(209, 61%, 16%);
`;

const Form = styled.form`
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    margin-top: 2rem;
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h3`
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    line-height: 1.25;
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
`;

const Label = styled.label`
    font-size: 1.25rem;
    color: hsl(205, 86%, 17%);
`;

const Input = styled.input`
    padding: 0.25rem 0.5rem;
    width: 4rem;
    border-radius: 0.25rem;
    border: none;
    margin: 0 0.5rem;
    font-size: 1.25rem;
`;

const Btn = styled.button`
    background: hsl(205, 78%, 60%);
    text-transform: uppercase;
    color: hsl(205, 86%, 17%);
    padding: 0.375rem 0.75rem;
    letter-spacing: 1px;
    display: inline-block;
    transition: all 0.3s linear;
    font-size: 0.875rem;
    border: 2px solid hsl(205, 78%, 60%);
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 0.25rem;
    :hover {
        color: hsl(205, 78%, 60%);
        background: hsl(205, 86%, 81%);
        border-color: hsl(205, 86%, 81%);
    }
`;

const Text = styled.p`
    margin-bottom: 1.25rem;
    color: hsl(210, 22%, 49%);
`;

export default Lorem;
