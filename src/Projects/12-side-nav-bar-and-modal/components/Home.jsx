import React from "react";
import styled, { keyframes, css } from "styled-components";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";

const SideBtn = keyframes`
    0% {
        transform: scale(1)
    }
    50% {
        transform: scale(1.5)
    }
    100% {
        transform: scale(1)
    }
`;

const Home = () => {
    const { openModal, openSidebar } = useGlobalContext();
    console.log("home");
    return (
        <Container>
            <BtnNav onClick={openSidebar}>
                <FaBars />
            </BtnNav>
            <BtnModal onClick={openModal}>show modal</BtnModal>
        </Container>
    );
};

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BtnNav = styled.button`
    position: fixed;
    top: 2rem;
    left: 3rem;
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: #49a6e9;
    cursor: pointer;
    transition: all 0.3s linear;
    animation: ${SideBtn} 2s ease-in-out infinite;
`;

const BtnModal = styled.button`
    text-transform: uppercase;
    background: black;
    color: white;
    padding: 0.375rem 0.75rem;
    letter-spacing: 0.1rem;
    display: inline-block;
    transition: all 0.3s linear;
    font-size: 0.875rem;
    cursor: pointer;
    border: 2px solid black;
    box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
    margin: 0.5rem;
    border-radius: 0.25rem;
    :hover {
        background: white;
        color: black;
    }
`;

export default Home;
