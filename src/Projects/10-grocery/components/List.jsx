import React from "react";
import styled from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ list, editItem, deleteItem }) => {
    return (
        <>
            {list.map((item) => {
                const { id, name } = item;
                return (
                    <GroceryItem key={id}>
                        <h2>{name}</h2>
                        <div>
                            <Btn edit={true} onClick={() => editItem(id)}>
                                <FaEdit />
                            </Btn>
                            <Btn delete={true} onClick={() => deleteItem(id)}>
                                <FaTrash />
                            </Btn>
                        </div>
                    </GroceryItem>
                );
            })}
        </>
    );
};

const GroceryItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    transition: all 0.3s linear;
    padding: 0.25rem 1rem;
    border-radius: 0.25rem;
    text-transform: capitalize;
`;

const Btn = styled.button`
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    font-size: 0.7rem;
    margin: 0 0.15rem;
    transition: all 0.3s linear;
    ${(prop) =>
        prop.edit &&
        `color: hsl(125, 71%, 66%);;
        :hover{
        color: hsl(125, 67%, 44%);
        }
    `}
    ${(prop) =>
        prop.delete &&
        `color: hsl(360, 71%, 66%);
        :hover{
        color: hsl(360, 67%, 44%);
        }
    `}
`;

export default List;
