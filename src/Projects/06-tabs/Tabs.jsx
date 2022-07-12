import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Title from "./components/Title";
import Menu from "./components/Menu";
import Content from "./components/Content";

const Tabs = () => {
    const [data, setData] = useState();
    const [menu, setMenu] = useState();
    const [index, setIndex] = useState(0);

    const fetchData = async () => {
        try {
            const res = await axios.get(
                "https://course-api.com/react-tabs-project"
            );
            setData(res.data);
            menuSetup(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const menuSetup = (data) => {
        const newMenu = [...new Set(data.map((item) => item.company))];
        setMenu(newMenu);
    };

    const menuHandler = (index) => {
        setIndex(index);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (data) {
        const content = data[index];
        const { dates, duties, title, company, id } = content;

        return (
            <Wrapper>
                <Container>
                    <Title />
                    <ContentBox>
                        <Menu
                            menu={menu}
                            index={index}
                            menuHandler={menuHandler}
                        />
                        <Content
                            title={title}
                            company={company}
                            dates={dates}
                            duties={duties}
                            id={id}
                        />
                    </ContentBox>
                </Container>
            </Wrapper>
        );
    }
};

const Wrapper = styled.div`
    background: #f1f5f8;
    min-height: 100vh;
    height: 100vh;
`;

const Container = styled.div`
    max-width: 1170px;
    padding-top: 5rem;
    height: 100vh;
`;

const ContentBox = styled.div`
    width: 80vw;
    margin: 0 auto;
    max-width: 1170px;
`;

export default Tabs;
