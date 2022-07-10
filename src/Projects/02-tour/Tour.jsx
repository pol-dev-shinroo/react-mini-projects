import React, { useState, useEffect } from "react";
import styled from "styled-components";
import fetchData from "./instance";

import { Loading, Lists } from "./components/index";

const Tour = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [tour, setTour] = useState([]);
    const loadData = async () => {
        setIsLoading(true);
        try {
            const res = await fetchData.get("tours");
            setIsLoading(false);
            setTour(res.data);
        } catch (err) {
            setIsLoading(false);
        }
    };

    const removeEach = (id) => {
        const newTours = tour.filter((item) => item.id !== id);
        setTour(newTours);
    };

    useEffect(() => {
        loadData();
    }, []);

    if (isLoading) {
        return (
            <Wrapper>
                <Main loading>
                    <Loading />
                </Main>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <Main>
                <Lists tour={tour} remove={removeEach} refresh={loadData} />
            </Main>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background: hsl(210, 36%, 96%);
    color: hsl(209, 61%, 16%);
    line-height: 1.5;
    font-size: 0.875rem;
    min-height: 100vh;
    height: auto;
    padding: 5rem 0;
`;

const Main = styled.div`
    width: 90vw;
    max-width: 620px;
    margin: auto;
    ${(props) =>
        props.loading &&
        `display: flex; align-items: center; justify-content: center;`}
`;

export default Tour;
