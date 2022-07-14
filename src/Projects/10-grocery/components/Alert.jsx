import React, { useEffect } from "react";
import styled from "styled-components";

const Alert = ({ type, msg, list, removeAlert }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert();
        }, 3000);
        return () => clearTimeout(timeout);
    }, [list]);
    return <AlertBox type={type}>{msg}</AlertBox>;
};

const AlertBox = styled.div`
    margin-bottom: 1rem;
    height: 1.25rem;
    display: grid;
    align-items: center;
    text-align: center;
    font-size: 0.7rem;
    border-radius: 0.25rem;
    letter-spacing: 0.1rem;
    text-transform: capitalize;
    ${(prop) =>
        prop.type === "success" &&
        `color: #155724;
  background: #d4edda;`}
    ${(prop) =>
        prop.type === "danger" &&
        `color: #721c24;
  background: #f8d7da;`}
`;

export default Alert;
