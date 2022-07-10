import React, { useState } from "react";
import styled from "styled-components";

const List = ({ id, image, name, info, price, remove }) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <Container>
            <Image src={image} alt={name} />
            <Footer>
                <InfoBox>
                    <h4>{name}</h4>
                    <Price>${price}</Price>
                </InfoBox>
                <Desc>
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <ReadMoreBtn onClick={() => setReadMore(!readMore)}>
                        {readMore ? "show less" : "  read more"}
                    </ReadMoreBtn>
                </Desc>
                <DeleteBtn onClick={() => remove(id)}>not interested</DeleteBtn>
            </Footer>
        </Container>
    );
};

const Container = styled.div`
    background: white;
    border-radius: 0.25rem;
    margin: 2rem 0;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s linear;
    :hover {
        transform: scale(1.05);
    }
    padding-bottom: 1rem;
`;

const Image = styled.img`
    width: 100%;
    height: 20rem;
    object-fit: cover;
    border-top-right-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
`;

const Footer = styled.footer``;

const Desc = styled.p`
    margin: auto;
    padding: 0rem 2rem;
`;

const InfoBox = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
`;

const Price = styled.h4`
    font-size: 1rem;
    color: hsl(205, 78%, 60%);
    background: hsl(205, 100%, 96%);
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem; ;
`;

const ReadMoreBtn = styled.button`
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: hsl(205, 78%, 60%);
    font-size: 1rem;
    cursor: pointer;
    padding-left: 0.25rem;
`;

const DeleteBtn = styled.button`
    display: block;
    width: 200px;
    margin: 1rem auto;
    color: hsl(360, 67%, 44%);
    letter-spacing: 0.1rem;
    background: transparent;
    border: 1px solid hsl(360, 71%, 66%);
    padding: 0.3rem 0.5rem;
    border-radius: 0.25rem;
    text-transform: capitalize;
    font-size: 1rem;
    :hover {
        color: #60dbfb;
        border: 1px solid #60dbfb;
        transform: scale(1.05);
    }
    transition: all 0.3s linear;
    cursor: pointer;
`;

export default List;
