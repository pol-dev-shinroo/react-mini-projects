import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import data from "../data";
import { useGlobalContext } from "../context";

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
    return (
        <Wrapper show={isSidebarOpen}>
            <Container>
                <Btn onClick={closeSidebar}>
                    <FaTimes />
                </Btn>
                <Content>
                    {data.map((item) => {
                        const { id, links, page } = item;
                        return (
                            <Article key={id}>
                                <h4>{page}</h4>
                                <SubLinks>
                                    {links.map((link, idx) => {
                                        const { url, icon, label } = link;
                                        return (
                                            <a key={idx} href={url}>
                                                {icon}
                                                {label}
                                            </a>
                                        );
                                    })}
                                </SubLinks>
                            </Article>
                        );
                    })}
                </Content>
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
    display: grid;
    place-items: center;
    visibility: hidden;
    z-index: -1;
    transition: all 0.3s linear;
    transform: scale(0);
    background: rgba(0, 0, 0, 0.5);
    @media screen and (min-width: 800px) {
        display: none;
    }
    ${(prop) =>
        prop.show &&
        ` visibility: visible;
  z-index: 5;
  transform: scale(1);`}
`;

const Container = styled.div`
    width: 90vw;
    height: 95vh;
    max-width: 620px;
    background: white;
    border-radius: 0.25rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    position: relative;
    padding: 4rem 2rem;
`;

const Btn = styled.button`
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: hsl(210, 22%, 49%);
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
`;

const Content = styled.div``;

const Article = styled.article`
    margin-bottom: 2rem;
    h4 {
        letter-spacing: var(--spacing);
        text-transform: capitalize;
        line-height: 1.25;
        margin-bottom: 1.5rem;
        font-size: 0.875rem;
    }
`;

const SubLinks = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 0.25rem;
    a {
        display: block;
        color: hsl(205, 86%, 17%);
        text-transform: capitalize;
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
    }
    svg {
        color: hsl(210, 22%, 49%);
        margin-right: 1rem;
    }
`;

export default Sidebar;
