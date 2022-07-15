import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";
import { social, links } from "../data";
import logo from "../logo.svg";

const SideBar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();

    return (
        <Container isSidebarOpen={isSidebarOpen}>
            <Header>
                <Img src={logo} alt="coding addict" />
                <Btn onClick={closeSidebar}>
                    <FaTimes />
                </Btn>
            </Header>
            <Links>
                {links.map((link) => {
                    const { id, url, text, icon } = link;
                    return (
                        <li key={id}>
                            <a href={url}>
                                {icon}
                                {text}
                            </a>
                        </li>
                    );
                })}
            </Links>
            <Social>
                {social.map((link) => {
                    const { id, url, icon } = link;
                    return (
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    );
                })}
            </Social>
        </Container>
    );
};

const Container = styled.aside`
    @media screen and (min-width: 676px) {
        width: 400px;
    }
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    display: grid;
    grid-template-rows: auto 1fr auto;
    row-gap: 1rem;
    box-shadow: hsl(360, 67%, 44%);
    transition: all 0.3s linear;
    transform: ${(prop) =>
        prop.isSidebarOpen ? `translate(0);` : `translate(-100%);`};
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
`;

const Img = styled.img`
    justify-self: center;
    height: 40px;
`;

const Btn = styled.button`
    font-size: 1.75rem;
    background: transparent;
    border-color: transparent;
    color: hsl(205, 78%, 60%);
    transition: all 0.3s linear;
    cursor: pointer;
    color: hsl(360, 67%, 44%);
    margin-top: 0.2rem;
`;

const Links = styled.ul`
    list-style-type: none;
    li a {
        display: flex;
        align-items: center;
        font-size: 1.25rem;
        text-transform: capitalize;
        padding: 1rem 1.5rem;
        color: hsl(209, 34%, 30%);
        transition: all 0.3s linear;
        letter-spacing: 0.1rem;
        text-decoration: none;
    }
    li a:hover {
        background: hsl(210, 36%, 96%);
        color: hsl(211, 39%, 23%);
    }
    li a svg {
        font-size: 1.5rem;
        color: hsl(210, 22%, 49%);
        margin-right: 1rem;
        transition: all 0.3s linear;
    }
    li a svg:hover {
        color: hsl(209, 28%, 39%);
    }
`;

const Social = styled.ul`
    list-style-type: none;
    justify-self: center;
    display: flex;
    padding-bottom: 2rem;
    li a {
        font-size: 1.5rem;
        margin: 0 0.5rem;
        color: hsl(205, 78%, 60%);
        transition: all 0.3s linear;
        text-decoration: none;
    }
    li a:hover {
        color: hsl(205, 86%, 17%);
    }
`;

export default SideBar;
