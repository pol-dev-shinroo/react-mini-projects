import React, { useState, useRef, useEffect } from "react";
import { links, social } from "./data";
import styled from "styled-components";
import logo from "./logo.svg";
import Header from "./components/Header";
import Links from "./components/Links";
import Social from "./components/Social";

const NavBar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };
    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = "0px";
        }
    }, [showLinks]);

    return (
        <Wrapper>
            <Container>
                <Nav>
                    <Header toggleLinks={toggleLinks} />
                    <Links
                        links={links}
                        linksContainerRef={linksContainerRef}
                        linksRef={linksRef}
                    />
                    <Social social={social} />
                </Nav>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background: #f1f5f8;
    min-height: 100vh;
    height: 100%;
`;

const Container = styled.div`
    background: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); ;
`;

const Nav = styled.div`
    @media screen and (min-width: 800px) {
        max-width: 1170px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
    }
`;

export default NavBar;
