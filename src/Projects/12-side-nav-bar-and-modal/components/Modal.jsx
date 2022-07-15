import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";

const Modal = () => {
    const { isModalOpen, closeModal } = useGlobalContext();
    console.log("modal");
    return (
        <Wrapper isModalOpen={isModalOpen}>
            <Container>
                <Heading>modal content</Heading>
                <Btn onClick={closeModal}>
                    <FaTimes />
                </Btn>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
    transition: all 0.3s linear;
    visibility: ${(prop) => (prop.isModalOpen ? `visible` : `hidden`)};
    z-index: ${(prop) => (prop.isModalOpen ? `10` : `-1`)};
`;

const Container = styled.div`
    background: white;
    border-radius: 0.25rem;
    width: 90vw;
    height: 30vh;
    max-width: 620px;
    text-align: center;
    display: grid;
    place-items: center;
    position: relative;
`;

const Heading = styled.h3`
    font-size: 1.25rem;
    letter-spacing: 0.1rem;
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
`;

const Btn = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: hsl(360, 67%, 44%);
    cursor: pointer;
`;

export default Modal;
