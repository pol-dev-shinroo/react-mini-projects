import React from "react";
import styled from "styled-components";

const Links = ({ links, linksContainerRef, linksRef }) => {
    return (
        <Container ref={linksContainerRef}>
            <Lists ref={linksRef}>
                {links.map((item) => {
                    const { id, url, text } = item;
                    return (
                        <li key={id}>
                            <Link href={url}>{text}</Link>
                        </li>
                    );
                })}
            </Lists>
        </Container>
    );
};

const Lists = styled.ul`
    list-style-type: none;
`;

const Link = styled.a`
    color: hsl(209, 34%, 30%);
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    display: block;
    padding: 0.5rem 1rem;
    transition: all 0.3s linear;
    :hover {
        background: hsl(205, 86%, 81%);
        color: hsl(205, 78%, 60%);
        padding-left: 1.5rem;
    }
`;

const Container = styled.div`
    height: 0;
    overflow: hidden;
    transition: all 0.3s linear;
    @media screen and (min-width: 800px) {
        height: auto !important;
        ${Lists} {
            display: flex;
        }
        a {
            padding: 0;
            margin: 0 0.5rem;
        }
        a: hover {
            padding: 0;
            background: transparent;
        }
    }
`;

export default Links;
