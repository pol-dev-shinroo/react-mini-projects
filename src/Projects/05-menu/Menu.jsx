import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Nav from "./components/Nav";
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
        console.log(data);
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

    console.log(list);

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
                            />
                        );
                    })}
                </NavBox>
                {list && (
                    <Grid>
                        {list.map((item) => {
                            console.log(item.img);
                            return (
                                <Card key={item.id}>
                                    <Image src={item.img} alt="" />
                                    <Content>
                                        <header>
                                            <Title>{item.title}</Title>
                                            <Title>${item.price}</Title>
                                        </header>
                                        <Text>{item.desc}</Text>
                                    </Content>
                                </Card>
                            );
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

const Card = styled.div`
    @media screen and (min-width: 768px) {
        grid-template-columns: 225px 1fr;
        grid-gap: 0 1.25rem;
        gap: 0 1.25rem;
        max-width: 40rem;
    }
    display: grid;
    grid-gap: 1rem 2rem;
    gap: 1rem 2rem;
    max-width: 25rem;
`;

const Image = styled.img`
    @media screen and (min-width: 768px) {
        height: 175px;
    }
    height: 200px;
    width: 100%;
    border: 0.25rem solid #c59d5f;
    display: block;
    border-radius: 0.25rem;
    object-fit: cover;
`;

const Content = styled.div`
    header {
        display: flex;
        justify-content: space-between;
        border-bottom: 0.5px dotted #617d98;
    }
`;

const Title = styled.h4`
    text-transform: capitalize;
`;

const Text = styled.p`
    margin-bottom: 0;
    padding-top: 1rem;
`;

export default Menu;
