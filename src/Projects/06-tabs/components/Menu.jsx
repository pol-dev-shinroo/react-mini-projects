import React from "react";
import styled from "styled-components";

const Menu = ({ menu, index, menuHandler }) => {
    return (
        <MenuBox>
            {menu.map((item, idx) => (
                <MenuBtn
                    key={item}
                    active={index === idx ? true : false}
                    onClick={() => menuHandler(idx)}
                >
                    {item}
                </MenuBtn>
            ))}
        </MenuBox>
    );
};

const MenuBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 4rem;
    flex-wrap: wrap;
`;

const MenuBtn = styled.button`
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1.25rem;
    letter-spacing: 0.1rem;
    margin: 0 0.5rem;
    transition: all 0.3s linear;
    cursor: pointer;
    padding: 0.25rem 0;
    line-height: 1;
    outline-color: #e0fcff;
    ${(prop) => (prop.active ? `box-shadow: 0 2px #2caeba;` : ``)}
    ${(prop) => (prop.active ? `color: #2caeba;` : ``)}
    : hover {
        box-shadow: 0 2px #2caeba;
        color: #2caeba;
    }
`;
export default Menu;
