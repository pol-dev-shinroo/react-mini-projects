import React, { useState, useEffect } from "react";
import styled from "styled-components";
import data from "./data";
import Heading from "./components/Heading";
import Main from "./components/Main";
import Loading from "../03-review/components/Loading";

const Slider = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [people, setPeople] = useState();

    useEffect(() => {
        setPeople(data);
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    if (!isLoading) {
        return (
            <Body>
                <Wrapper>
                    <Heading />
                    <Main people={people} />
                </Wrapper>
            </Body>
        );
    }
};

const Body = styled.div`
    background: #f1f5f8;
    line-height: 1.5;
    font-size: 0.875rem;
    min-width: 450px;
    width: 100vw;
    height: 100vh;
`;

const Wrapper = styled.div`
    width: 90vw;
    margin: auto;
    max-width: 1170px;
    height: 100vh;
    padding-top: 4rem;
    min-width: 450px;
`;

export default Slider;
