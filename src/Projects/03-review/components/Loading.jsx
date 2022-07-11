import React from "react";
import { BarLoader } from "react-spinners";
import styled from "styled-components";

const Loading = () => {
    return (
        <>
            <Title>Loading...</Title>
            <BarLoader height={10} width={300} color="hsl(205, 78%, 60%)" />
        </>
    );
};

const Title = styled.h2`
    margin: 2rem auto;
    font-size: 3rem;
`;

export default Loading;
