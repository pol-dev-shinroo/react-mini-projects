import React from "react";
import styled from "styled-components";
import Alert from "./Alert";

const Form = ({
    alert,
    handleSubmit,
    refContainer,
    isEditing,
    removeAlert,
    list,
}) => {
    console.log(alert);
    return (
        <form onSubmit={handleSubmit}>
            {alert.open && (
                <Alert {...alert} removeAlert={removeAlert} list={list} />
            )}
            <Heading>grocery bud</Heading>
            <InputField>
                <Input type="text" ref={refContainer} placeholder="e.g. eggs" />
                <SubmitBtn type="submit">
                    {isEditing ? "edit" : "submit"}
                </SubmitBtn>
            </InputField>
        </form>
    );
};

const Heading = styled.h3`
    color: hsl(205, 86%, 17%);
    margin-bottom: 1.5rem;
    text-align: center;
    text-transform: capitalize;
    font-size: 1.75rem;
`;

const InputField = styled.div`
    display: flex;
    justify-content: center;
`;

const Input = styled.input`
    padding: 0.25rem;
    padding-left: 1rem;
    background: hsl(210, 36%, 96%);
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    border-color: transparent;
    font-size: 1rem;
    flex: 1 0 auto;
    color: hsl(210, 22%, 49%);
`;

const SubmitBtn = styled.button`
    background: hsl(205, 86%, 81%);
    border-color: transparent;
    flex: 0 0 5rem;
    display: grid;
    align-items: center;
    padding: 0.25rem;
    text-transform: capitalize;
    letter-spacing: 2px;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    cursor: pointer;
    content: hsl(205, 78%, 60%);
    transition: all 0.3s linear;
    font-size: 0.85rem;
    :hover {
        background: hsl(205, 78%, 60%);
        color: white;
    }
`;

export default Form;
