import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const List = (props) => {
    const { name, link, img } = props;
    const navigate = useNavigate();
    const handleClick = (link) => {
        navigate(link);
    };

    return (
        <ItemBox onClick={() => handleClick(link)}>
            <ImageContaner>
                <Img src={img} alt="" />
            </ImageContaner>
            <Footer>{name}</Footer>
        </ItemBox>
    );
};

const ItemBox = styled.a`
    border-radius: 0.25rem;
    background: white;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    transition: 0.3s ease-in-out all;
    :hover {
        transform: scale(1.05);
    }
    width: 100%;
    height: 500px;
    cursor: pointer;
`;

const ImageContaner = styled.div`
    height: 90%;
    position: relative;
`;

const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

const Footer = styled.footer`
    text-align: center;
    padding: 1rem 1.25rem;
    background: white;
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    width: 100%;
    text-transform: capitalize;
`;

export default List;
