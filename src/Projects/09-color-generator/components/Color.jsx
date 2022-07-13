import React, { useState, useEffect } from "react";
import styled from "styled-components";
import rgbToHex from "../utils";

const Color = ({ rgb, weight, index, hexColor }) => {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(",");
    const hexValue = `#${hexColor}`;
    const moreThanTen = index > 10 && true;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false);
        }, 3000);
        return () => clearTimeout(timeout);
    }, [alert]);
    return (
        <Canvas
            background={bcg}
            onClick={() => {
                setAlert(true);
                navigator.clipboard.writeText(hexValue);
            }}
        >
            <Percent moreThanTen={moreThanTen}>{weight}%</Percent>
            <ColorValue moreThanTen={moreThanTen}>{hexColor}</ColorValue>
            {alert && <Alert>copied to clipboard</Alert>}
        </Canvas>
    );
};

const Canvas = styled.div`
    background: rgb(${(prop) => prop.background});
    padding: 1rem 2rem;
    cursor: pointer;
    font-size: 1rem;
    text-transform: none;
`;

const Percent = styled.p`
    margin-bottom: 0;
    ${(prop) =>
        prop.moreThanTen ? `color: white;` : `color: hsl(209, 61%, 16%);`}
`;

const ColorValue = styled.p`
    margin-bottom: 0;
    ${(prop) =>
        prop.moreThanTen ? `color: white;` : `color: hsl(209, 61%, 16%);`}
`;

const Alert = styled.p`
    text-transform: uppercase;
    font-size: 0.85rem;
    margin-top: 0.5rem;
`;

export default Color;
