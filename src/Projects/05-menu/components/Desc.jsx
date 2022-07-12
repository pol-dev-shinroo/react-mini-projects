import React from "react";
import styled from "styled-components";

const Desc = ({ img, title, price, desc }) => {
    return (
        <Card>
            <Image src={img} alt="" />
            <Content>
                <header>
                    <Title>{title}</Title>
                    <Title>${price}</Title>
                </header>
                <Text>{desc}</Text>
            </Content>
        </Card>
    );
};

const Card = styled.div`
    @media screen and (min-width: 768px) {
        grid-template-columns: 225px 1fr;
        grid-gap: 0 1.25rem;
        gap: 0 1.25rem;
        max-width: 40rem;
    }
    display: grid;
    grid-gap: 1rem 2rem;
    gap: 1rem 2rem;
    max-width: 25rem;
`;

const Image = styled.img`
    @media screen and (min-width: 768px) {
        height: 175px;
    }
    height: 200px;
    width: 100%;
    border: 0.25rem solid #c59d5f;
    display: block;
    border-radius: 0.25rem;
    object-fit: cover;
`;

const Content = styled.div`
    header {
        display: flex;
        justify-content: space-between;
        border-bottom: 0.5px dotted #617d98;
    }
`;

const Title = styled.h4`
    text-transform: capitalize;
`;

const Text = styled.p`
    margin-bottom: 0;
    padding-top: 1rem;
`;
export default Desc;
