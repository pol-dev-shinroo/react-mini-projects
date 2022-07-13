import React from "react";
import styled from "styled-components";

const Heading = ({ handleSubmit, refContainer, color, error }) => {
    return (
        <>
            <h3>color generator</h3>
            <form onSubmit={handleSubmit}>
                <Input
                    error={error}
                    type="text"
                    ref={refContainer}
                    defaultValue={color}
                />
                <Btn type="submit">submit</Btn>
            </form>
        </>
    );
};

const Input = styled.input`
    border-color: transparent;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    ${(prop) => prop.error && `border: 2px solid hsl(360, 67%, 44%);`}
    :focus {
        outline: none;
    }
`;

const Btn = styled.button`
    background: hsl(205, 90%, 76%);
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    border-color: transparent;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    text-transform: capitalize;
    color: white;
    cursor: pointer;
`;

export default Heading;
