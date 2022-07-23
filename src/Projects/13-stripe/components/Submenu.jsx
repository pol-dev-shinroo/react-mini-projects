import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context";
import styled from "styled-components";

const Submenu = () => {
    const {
        isSubmenuOpen,
        page: { page, links },
        location,
    } = useGlobalContext();

    const container = useRef(null);
    const [columns, setColumns] = useState("col-2");

    useEffect(() => {
        setColumns("col-2");
        const submenu = container.current;
        const { center, bottom } = location;
        submenu.style.left = `${center}px`;
        submenu.style.top = `${bottom}px`;
        console.log(links);
        if (links.length === 3) {
            setColumns("col-3");
        }
        if (links.length > 3) {
            setColumns("col-4");
        }
    }, [page, location, links]);

    return (
        <Wrapper show={isSubmenuOpen} ref={container}>
            <Section>
                <h4>{page}</h4>
                <Center col={columns}>
                    {links.map((link, index) => {
                        const { url, icon, label } = link;
                        return (
                            <a key={index} href={url}>
                                {icon}
                                {label}
                            </a>
                        );
                    })}
                </Center>
            </Section>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    display: none;
    padding: 2rem;
    border-radius: 0.25rem;
    transition: all 0.3s linear;
    &:before {
        content: "";
        display: block;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid white;
        position: absolute;
        top: -5px;
        left: 50%;
        transform: translateX(-50%);
    }
    ${(prop) => prop.show && `display: block;`}
    h4 {
        margin-bottom: 1.5rem;
    }
`;

const Section = styled.section`
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    @media screen and (min-width: 992px) {
        width: 95vw;
    }
`;

const Center = styled.div`
    display: grid;
    gap: 0.25rem 2rem;
    a {
        width: 10rem;
        display: block;
        color: hsl(209, 61%, 16%);
        text-transform: capitalize;
        display: flex;
        align-items: center;
    }
    svg {
        color: hsl(210, 22%, 49%);
        margin-right: 1rem;
    }
    ${(prop) =>
        prop.col === "col-2" && `grid-template-columns: repeat(2, 1fr);`}
    ${(prop) =>
        prop.col === "col-3" && `grid-template-columns: repeat(3, 1fr);`}
    ${(prop) =>
        prop.col === "col-4" && `grid-template-columns: repeat(4, 1fr);`}
`;

export default Submenu;
