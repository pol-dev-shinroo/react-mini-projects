import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import getLocalStorage from "./utils";
import Form from "./components/Form";
import List from "./components/List";

const Grocery = () => {
    const [itemToEdit, setItemToEdit] = useState();
    const [list, setList] = useState(getLocalStorage());
    const [isEditing, setIsEditing] = useState(false);
    const [alert, setAlert] = useState({ open: false, msg: "", type: "" });
    const refContainer = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        let nameValue = refContainer.current.value;

        if (!nameValue) {
            alertHandler(true, "please enter value", "danger");
        } else {
            if (isEditing) {
                setList(
                    list.map((item) => {
                        if (item.id === itemToEdit.id) {
                            return { ...item, name: nameValue };
                        } else {
                            return item;
                        }
                    })
                );
                setItemToEdit({});
                setIsEditing(false);
                alertHandler(true, "item edited", "success");
            }
            if (!isEditing) {
                let newItem = {
                    id: new Date().getTime().toString(),
                    name: nameValue,
                };
                setList([...list, newItem]);
                alertHandler(true, "item added to the list", "success");
            }
        }
        refContainer.current.value = "";
    };

    const putLocalStorage = () => {
        localStorage.setItem("list", JSON.stringify(list));
    };

    const deleteItem = (id) => {
        setList(() => {
            return list.filter((item) => item.id !== id);
        });
    };

    const editItem = (id) => {
        refContainer.current.focus();
        setItemToEdit(() => {
            const item = list.find((item) => item.id === id);
            refContainer.current.value = item.name;
            return item;
        });
        setIsEditing(true);
    };

    const deleteAll = () => {
        setList([]);
    };

    const alertHandler = (open = false, msg = "", type = "") => {
        setAlert({ open, msg, type });
    };

    useEffect(() => {
        putLocalStorage();
    }, [list]);

    return (
        <Wrapper>
            <Container>
                <Form
                    handleSubmit={handleSubmit}
                    refContainer={refContainer}
                    isEditing={isEditing}
                    alert={alert}
                    removeAlert={alertHandler}
                    list={list}
                />
                {list.length > 0 && (
                    <GroceryContainer>
                        <List
                            list={list}
                            editItem={editItem}
                            deleteItem={deleteItem}
                        />
                        <ClearBtn onClick={deleteAll}>clear items</ClearBtn>
                    </GroceryContainer>
                )}
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background: #f1f5f8;
    min-height: 100vh;
    height: 100%;
    padding-top: 8rem;
`;

const Container = styled.div`
    background: white;
    border-radius: 0.25rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s linear;
    padding: 2rem;
    width: 90vw;
    margin: 0 auto;
    max-width: 35rem;
    :hover {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
`;

const GroceryContainer = styled.div`
    margin-top: 2rem;
`;

const ClearBtn = styled.button`
    text-transform: capitalize;
    width: 10rem;
    height: 1.5rem;
    display: grid;
    align-items: center;
    background: transparent;
    border-color: transparent;
    color: hsl(360, 71%, 66%);
    margin: 0 auto;
    font-size: 0.85rem;
    letter-spacing: 0.1rem;
    cursor: pointer;
    transition: all 0.3s linear;
    margin-top: 1.25rem;
`;

export default Grocery;
