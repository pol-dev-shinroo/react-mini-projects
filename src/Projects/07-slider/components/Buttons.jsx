import React from "react";
import styled from "styled-components";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Buttons = ({ index, setIndex }) => {
    return (
        <>
            <Btn prev onClick={() => setIndex(index + 1)}>
                <FiChevronLeft />
            </Btn>
            <Btn next>
                <FiChevronRight onClick={() => setIndex(index - 1)} />
            </Btn>
        </>
    );
};

const Btn = styled.button`
    position: absolute;
    top: 200px;
    transform: translateY(-50%);
    background: var(--clr-grey-5);
    color: var(--clr-white);
    width: 1.25rem;
    height: 1.25rem;
    display: grid;
    place-items: center;
    border-color: transparent;
    font-size: 1rem;
    border-radius: var(--radius);
    cursor: pointer;
    transition: var(--transition);
    :hover {
        background: var(--clr-primary-5);
    }
    ${(prop) => prop.prev && `left: 0;`}
    ${(prop) => prop.next && `right: 0;`}
`;

export default Buttons;
