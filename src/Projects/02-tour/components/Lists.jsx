import React from "react";
import styled from "styled-components";
import List from "./List";

const Lists = ({ tour, remove, refresh }) => {
    return (
        <>
            <Title noTour={tour.length === 0 ? true : false}>
                <Heading>
                    {tour.length === 0 ? `no tours` : `our tours`}
                </Heading>
                <Underline />
            </Title>
            {tour.length === 0 ? (
                <RefrehBtn onClick={() => refresh()}>Refresh</RefrehBtn>
            ) : (
                <div>
                    {tour.map((item) => {
                        return <List key={item.id} {...item} remove={remove} />;
                    })}
                </div>
            )}
        </>
    );
};

const Title = styled.div`
    text-align: center;
    margin-bottom: ${(props) => (props.noTour ? `2rem;` : `4rem;`)};
`;

const Heading = styled.h2`
    font-size: 2.5rem;
    text-transform: capitalize;
`;

const Underline = styled.div`
    width: 6rem;
    height: 0.25rem;
    background: hsl(205, 78%, 60%);
    margin: auto;
`;

const RefrehBtn = styled.button`
    background: hsl(205, 78%, 60%);
    display: block;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    text-transform: capitalize;
    color: white;
    letter-spacing: 0.1rem;
    border-color: transparent;
    cursor: pointer;
    margin: auto;
    font-size: 1.2rem;
`;

export default Lists;
