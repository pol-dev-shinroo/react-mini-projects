import React from "react";
import styled from "styled-components";
import { FaQuoteRight } from "react-icons/fa";

const Content = ({ image, job, name, text }) => {
    return (
        <>
            <ImageContainer>
                <Image src={image} alt={name} />
                <IconContainer>
                    <FaQuoteRight />
                </IconContainer>
            </ImageContainer>
            <Name>{name}</Name>
            <Desc job={true}>{job}</Desc>
            <Desc info={true}>{text}</Desc>
        </>
    );
};

const ImageContainer = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1.5rem;
`;

const Image = styled.img`
    width: 100%;
    display: block;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    position: relative;
`;

const IconContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 2.5rem;
    height: 2.5rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    transform: translateY(25%);
    background: hsl(205, 78%, 60%);
    color: white;
`;

const Name = styled.h4`
    text-transform: capitalize;
    font-size: 0.875rem;
`;

const Desc = styled.p`
    ${(prop) =>
        prop.job &&
        `margin-bottom: 0.5rem;
  text-transform: uppercase;
  color: hsl(205, 78%, 60%);
  font-size: 0.85rem;`}
    ${(prop) =>
        prop.info && ` margin-bottom: 0.75rem; color: hsl(210, 22%, 49%);`}
`;

export default Content;
