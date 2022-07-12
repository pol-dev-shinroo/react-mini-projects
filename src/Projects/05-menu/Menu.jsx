import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Desc from "./components/Desc";
import data from "./data";

// A way to automate categorization:
const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const Menu = () => {
    const arr = ["all", "breakfast", "lunch", "shakes"];

    const [index, setIndex] = useState(0);
    const [list, setList] = useState();

    const indexHandler = (id) => {
        setIndex(id);
    };

    const listHandler = (arr, index) => {
        if (index === 0) {
            data.sort((a, b) => {
                return a.price - b.price;
            });
            setList(data);
        } else {
            let newList = data.filter((each) => each.category === arr[index]);
            newList.sort((a, b) => {
                return a.price - b.price;
            });
            setList(newList);
        }
    };

    useEffect(() => {
        listHandler(arr, index);
    }, [index]);

    return (
        <Wrapper>
            <Main>
                <Header />
                <NavBox>
                    {arr.map((item, id) => {
                        return (
                            <Nav
                                item={item}
                                index={index}
                                indexHandler={indexHandler}
                                id={id}
                                key={id}
                            />
                        );
                    })}
                </NavBox>
                {list && (
                    <Grid>
                        {list.map((item) => {
                            const { id, ...props } = item;
                            console.log(id);
                            return <Desc key={id} {...props} />;
                        })}
                    </Grid>
                )}
            </Main>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background: #f1f5f8;
    min-width: 438px;
    min-height: 100vh;
`;

const Main = styled.div`
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    padding: 5rem 0;
    min-width: 438px;
    height: 100%;
`;

const NavBox = styled.div`
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
`;

const Grid = styled.div`
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    display: grid;
    grid-gap: 3rem 2rem;
    gap: 3rem 2rem;
    justify-items: center;
    min-width: 438px;
`;

export default Menu;
