import React from "react";
import styled from "styled-components";

const Heading = () => {
    return (
        <TitleBox>
            <Title>
                <Slash>/</Slash>reviews
            </Title>
        </TitleBox>
    );
};

const TitleBox = styled.div`
    text-align: center;
    margin-bottom: 2rem;
`;

const Title = styled.h2`
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 2rem;
    color: hsl(209, 61%, 16%);
`;

const Slash = styled.span`
    font-size: 0.85em;
    color: hsl(21, 62%, 45%);
    margin-right: 1rem;
    font-weight: 900;
`;

export default Heading;
