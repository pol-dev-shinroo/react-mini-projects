import React from "react";
import styled from "styled-components";

const Social = ({ social }) => {
    return (
        <Container>
            {social.map((item) => {
                const { id, url, icon } = item;
                return (
                    <List key={id}>
                        <Link href={url}>{icon}</Link>
                    </List>
                );
            })}
        </Container>
    );
};

const List = styled.li``;

const Link = styled.a``;

const Container = styled.ul`
    list-style-type: none;
    display: none;
    @media screen and (min-width: 800px) {
        display: flex;
        ${Link} {
            margin: 0 0.5rem;
            color: hsl(205, 78%, 60%);
            transition: all 0.3s linear;
        }
        ${Link}:hover {
            color: hsl(205, 90%, 76%);
        }
    }
`;

export default Social;
