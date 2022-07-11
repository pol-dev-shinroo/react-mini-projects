import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
    const [isOpen, setIsOpen] = useState(false);
    const btnHandler = () => {
        setIsOpen(!isOpen);
    };
    return (
        <Box>
            <Header>
                <Title>{title}</Title>
                <Btn onClick={() => btnHandler()}>
                    {isOpen ? <AiOutlinePlus /> : <AiOutlineMinus />}
                </Btn>
            </Header>
            <Text>{isOpen ? info : ""}</Text>
        </Box>
    );
};

const Box = styled.div`
    padding: 1rem 1.5rem;
    border: 2px solid #eae6eb;
    border-radius: 0.25rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Btn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    margin-left: 1rem;
    align-self: center;
    width: 2rem;
    height: 2rem;
    border-color: transparent;
    background: #eae6eb;
    color: #b4345c;
`;

const Title = styled.h4`
    line-height: 1.5;
`;

const Text = styled.p`
    margin-bottom: 0;
    margin-top: 0.5rem;
`;

export default Question;
