import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Nav = ({ item, index, indexHandler, id }) => {
    const [isCurrent, setIsCurrent] = useState(false);
    const checkCurrent = (index, id) => {
        console.log(index, id);
        if (id === index) {
            setIsCurrent(true);
        } else {
            setIsCurrent(false);
        }
    };
    console.log(isCurrent);

    useEffect(() => {
        checkCurrent(index, id);
    }, [index]);
    return (
        <Wrapper>
            <Btn
                isCurrent={isCurrent}
                onClick={() => {
                    indexHandler(id);
                }}
            >
                {item}
            </Btn>
        </Wrapper>
    );
};

const Wrapper = styled.div``;

const Btn = styled.button`
    ${(props) =>
        props.isCurrent
            ? `background: #c59d5f;
        color: white;`
            : `color: #c59d5f;
    background: transparent;`}
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.375rem 0.75rem;
    cursor: pointer;
    transition: all 0.3s linear;
    border-radius: 0.25rem;
    margin: 0 0.5rem;
    letter-spacing: 1px;
    border-color: transparent;
    :hover {
        background: #c59d5f;
        color: white;
    }
`;

export default Nav;
