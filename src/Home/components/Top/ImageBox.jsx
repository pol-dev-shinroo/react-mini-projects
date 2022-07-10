import React from "react";
import styled from "styled-components";
import image from "../../../assets/Home/react-project-hometop.png";

const ImageBox = () => {
    return <ImageBoxContainer src={image} alt="" />;
};

const ImageBoxContainer = styled.img`
    @media (min-width: 992px) {
        display: block;
    }
    display: none;
    width: 100%;
`;

export default ImageBox;
