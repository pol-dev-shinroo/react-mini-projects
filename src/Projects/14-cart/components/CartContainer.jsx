import React from "react";
import CartItem from "./CartItem";
import styled from "styled-components";
import { useGlobalContext } from "../context";

const CartContainer = () => {
    const { cart } = useGlobalContext();
    if (cart.length === 0) {
        return (
            <Cart>
                {/* cart header */}
                <header>
                    <h2>your bag</h2>
                    <Empty>is currently empty</Empty>
                </header>
            </Cart>
        );
    }
    return (
        <Cart>
            {/* cart header */}
            <header>
                <h2>your bag</h2>
            </header>
            {/* cart items */}
            <div>
                {cart.map((item) => {
                    return <CartItem key={item.id} {...item} />;
                })}
            </div>
            {/* cart footer */}
            <footer>
                <hr />
                <div>
                    <Total>
                        total <span>$0.00</span>
                    </Total>
                </div>
                <Btn onClick={() => console.log("clear cart")}>clear cart</Btn>
            </footer>
        </Cart>
    );
};

const Cart = styled.div`
    min-height: calc(100vh - 120px);
    width: 90vw;
    margin: 0 auto;
    margin-top: 40px;
    padding: 2.5rem 0;
    max-width: 50rem;
    h2 {
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 3rem;
    }
    footer {
        margin-top: 4rem;
        text-align: center;
    }
`;

const Empty = styled.h4`
    text-transform: lowercase;
    color: #617d98;
    margin-top: 1rem;
    text-align: center;
`;

const Total = styled.h4`
    text-transform: capitalize;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
`;

const Btn = styled.div`
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    display: inline-block;
    font-weight: 700;
    transition: all 0.3s linear;
    font-size: 0.875rem;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    :hover {
        background: hsl(360, 71%, 66%);
        color: hsl(360, 67%, 44%);
        border-color: hsl(360, 71%, 66%);
    }
    background: transparent;
    padding: 0.5rem 1rem;
    color: hsl(360, 67%, 44%);
    border: 1px solid hsl(360, 67%, 44%);
    margin-top: 2.25rem;
    border-radius: 0.25rem;
`;

export default CartContainer;
