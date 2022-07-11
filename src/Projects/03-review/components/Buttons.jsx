import React from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Buttons = ({ prev, next, randomize, currentNo }) => {
    return (
        <>
            <div>
                <Btn
                    onClick={() => {
                        prev(currentNo);
                    }}
                >
                    <FaChevronLeft />
                </Btn>
                <Btn
                    onClick={() => {
                        next(currentNo);
                    }}
                >
                    <FaChevronRight />
                </Btn>
            </div>
            <Btn
                random={true}
                onClick={() => {
                    randomize();
                }}
            >
                Random Review
            </Btn>
        </>
    );
};
const Btn = styled.button`
    ${(prop) =>
        prop.random
            ? `margin-top: 0.5rem;
  background: hsl(205, 100%, 96%);
  color: hsl(205, 90%, 76%);
  padding: 0.25rem 0.5rem;
  text-transform: capitalize;
  border-radius: 0.25rem;;
  transition: all 0.3s linear;
  border-color: transparent;
  cursor: pointer;
  font-size: 1.25rem;
  `
            : `color: hsl(205, 90%, 76%);
    font-size: 1.25rem;
    background: transparent;
    border-color: transparent;
    margin: 0 0.5rem;
    transition: all 0.3s linear;
    cursor: pointer;
    `}
    :hover {
        color: hsl(205, 78%, 60%);
    }
`;

export default Buttons;
