import React from "react";
import styled from "styled-components";
import data from "../data";
import logo from "../logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
const Nav = () => {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
    const displaySubmenu = (e) => {
        const page = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom - 3;
        openSubmenu(page, { center, bottom });
    };
    const handleSubmenu = (e) => {
        if (!e.target.classList.contains("link-btn")) {
            closeSubmenu();
        }
        console.log("mouse over");
        closeSubmenu();
    };
    return (
        <Wrapper onMouseOver={handleSubmenu}>
            <Container>
                <Header>
                    <Img src={logo} alt="logo" />
                    <ToggleBtn onClick={openSidebar}>
                        <FaBars />
                    </ToggleBtn>
                </Header>
                <Lists>
                    {data.map((item) => {
                        const { id, page } = item;
                        return (
                            <li key={id}>
                                <button
                                    className="link-btn"
                                    onMouseOver={displaySubmenu}
                                >
                                    {page}
                                </button>
                            </li>
                        );
                    })}
                </Lists>
                <SignInBtn>sign in</SignInBtn>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    z-index: 2;
    position: relative;
    border: 2px solid red;
`;

const Container = styled.div`
    width: 90vw;
    max-width: 1170px;
    @media screen and (min-width: 800px) {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Img = styled.img``;

const ToggleBtn = styled.button`
    font-size: 1rem;
    padding: 0.25rem 0.75rem;
    border-radius: 0.25rem;
    border-color: transparent;
    color: white;
    background: black;
    cursor: pointer;
    transition: all 0.3s linear;
    :hover {
        background: hsl(210, 22%, 49%);
    }
    @media screen and (min-width: 800px) {
        display: none;
    }
`;

const Lists = styled.ul`
    @media screen and (min-width: 800px) {
        display: block;
        justify-self: center;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        text-align: center;
        height: 100%;
        display: grid;
        align-items: center;
    }
    display: none;
    list-style-type: none;
    li {
        height: 100%;
        width: 100%;
    }
    button {
        height: 100%;
        background: transparent;
        border-color: transparent;
        font-size: 1.1rem;
        color: black;
        text-transform: capitalize;
        letter-spacing: 1px;
        width: 10rem;
    }
`;

const SignInBtn = styled.button`
    @media screen and (min-width: 800px) {
        display: inline-block;
        font-size: 1rem;
        padding: 0.25rem 0.75rem;
        border-radius: 0.25rem;
        border-color: transparent;
        color: white;
        background: black;
        cursor: pointer;
        transition: all 0.3s linear;
        text-transform: capitalize;
        :hover {
            background: hsl(210, 22%, 49%);
        }
    }
    display: none;
`;

export default Nav;
