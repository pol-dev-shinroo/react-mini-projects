import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
const Navbar = () => {
    const { amount } = useGlobalContext();
    return (
        <Nav>
            <NavCenter className="nav-center">
                <h3>useReducer</h3>
                <div className="nav-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
                    </svg>
                    <AmountContainer className="amount-container">
                        <p className="total-amount">{amount}</p>
                    </AmountContainer>
                </div>
            </NavCenter>
        </Nav>
    );
};

const Nav = styled.nav`
    background: #2680c0;
    padding: 1.25rem 2rem;
`;

const NavCenter = styled.div`
    max-width: var(--fixed-width);
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
        margin-bottom: 0;
        color: white;
    }
    .nav-container {
        display: block;
        position: relative;
    }
    svg {
        width: 2rem;
        fill: white;
    }
`;

const AmountContainer = styled.div`
    position: absolute;
    top: -0.85rem;
    right: -0.85rem;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    background: hsl(205, 84%, 74%);
    display: flex;
    align-items: center;
    justify-content: center;
    .total-amount {
        color: white;
        margin-bottom: 0;
        font-size: 1.25rem;
    }
`;

export default Navbar;
