import React from "react";
import { useGlobalContext } from "../context";
import styled from "styled-components";
const CartItem = ({ id, img, title, price, amount }) => {
    const { remove, increase, decrease } = useGlobalContext();
    return (
        <Container>
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <Price>${price}</Price>
                {/* remove button */}
                <RemoveBtn onClick={() => remove(id)}>remove</RemoveBtn>
            </div>
            <div>
                {/* increase amount */}
                <AmountBtn onClick={() => increase(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
                    </svg>
                </AmountBtn>
                {/* amount */}
                <Remove>{amount}</Remove>
                {/* decrease amount */}
                <AmountBtn onClick={() => decrease(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </AmountBtn>
            </div>
        </Container>
    );
};

const Container = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    grid-column-gap: 1.5rem;
    margin: 1.5rem 0;
    img {
        width: 5rem;
        height: 5rem;
        object-fit: cover;
    }
    h4 {
        margin-bottom: 0.5rem;
        font-weight: 500;
        letter-spacing: 2px;
    }
`;

const Price = styled.h4`
    color: #617d98;
`;

const RemoveBtn = styled.button`
    color: #2680c0;
    letter-spacing: var(--spacing);
    cursor: pointer;
    font-size: 0.85rem;
    background: transparent;
    border: none;
    margin-top: 0.375rem;
    transition: all 0.3s linear;
    :hover {
        color: hsl(205, 84%, 74%);
    }
`;

const AmountBtn = styled.button`
    width: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    svg {
        fill: #2680c0;
    }
    :hover svg {
        fill: hsl(205, 84%, 74%);
    }
`;

const Remove = styled.p`
    text-align: center;
    margin-bottom: 0;
    font-size: 1.25rem;
    line-height: 1;
`;

export default CartItem;
