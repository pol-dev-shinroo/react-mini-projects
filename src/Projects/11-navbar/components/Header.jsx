import React from "react";
import styled from "styled-components";
import logo from "../logo.svg";
import { FaBars } from "react-icons/fa";

const Header = ({ toggleLinks }) => {
    return (
        <Container>
            <Image src={logo} className="logo" alt="logo" />
            <ToggleBtn className="nav-toggle" onClick={toggleLinks}>
                <FaBars />
            </ToggleBtn>
        </Container>
    );
};

const ToggleBtn = styled.div`
    font-size: 1.5rem;
    color: hsl(205, 78%, 60%);
    background: transparent;
    border-color: transparent;
    transition: all 0.3s linear;
    cursor: pointer;
    :hover {
        color: hsl(205, 86%, 17%);
        transform: rotate(90deg);
    }
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    @media screen and (min-width: 800px) {
        ${ToggleBtn} {
            display: none;
        }
    }
`;

const Image = styled.img`
    height: 40px;
`;

export default Header;
