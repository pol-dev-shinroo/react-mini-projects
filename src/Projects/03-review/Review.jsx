import React, { useState, useEffect } from "react";
import styled from "styled-components";
import reviews from "./data";
import Loading from "./components/Loading";
import Lists from "./components/Lists";

const Review = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();

    const fetchData = () => {
        setData(reviews);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) {
        return (
            <Wrapper>
                <Main>
                    <Loading />
                </Main>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <Main>
                <TitleContainer>
                    <Title>our review</Title>
                    <Underline />
                </TitleContainer>
                <Lists data={data} />
            </Main>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    min-height: 100vh;
    height: auto;
    background: hsl(210, 36%, 96%);
    padding: 5rem 0;
`;

const Main = styled.div`
    width: 90vw;
    max-width: 620px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const TitleContainer = styled.div`
    text-align: center;
    margin-bottom: 4rem;
`;

const Title = styled.h2`
    font-size: 2rem;
    text-transform: capitalize;
    margin-bottom: 0.5rem;
`;

const Underline = styled.div`
    height: 0.25rem;
    width: 5rem;
    background: hsl(205, 78%, 60%);
    margin-left: auto;
    margin-right: auto;
`;

export default Review;
