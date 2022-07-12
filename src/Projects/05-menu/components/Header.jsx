import React from "react";
import styled from "styled-components";
const Header = () => {
    return (
        <TitleBox>
            <Title>our menu</Title>
            <Underline />
        </TitleBox>
    );
};

const TitleBox = styled.div`
    text-align: center;
    margin-bottom: 2rem;
}`;

const Title = styled.h2`
    font-size: 2rem;
    line-height: 1.5;
    text-transform: capitalize;
    margin-bottom: 0.75rem;
`;

const Underline = styled.div`
    width: 5rem;
    height: 0.25rem;
    background: #c59d5f;
    margin-left: auto;
    margin-right: auto;
`;

export default Header;
