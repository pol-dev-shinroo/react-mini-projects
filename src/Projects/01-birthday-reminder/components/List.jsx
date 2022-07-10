import React from "react";
import styled from "styled-components";

const List = (props) => {
    const { name, age, image } = props;
    return (
        <Person>
            <Image src={image} alt="" />
            <div>
                <Name>{name}</Name>
                <Age>{age} years</Age>
            </div>
        </Person>
    );
};

const Person = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 0.75rem;
    margin-bottom: 1.5rem;
    align-items: center;
    max-width: 100%;
    width: 90vw;
`;

const Image = styled.img`
    width: 75px;
    height: 75px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: var(--light-shadow);
`;

const Name = styled.h4`
    margin-bottom: 0.35rem;
`;

const Age = styled.p`
    margin-bottom: 0;
`;

export default List;
