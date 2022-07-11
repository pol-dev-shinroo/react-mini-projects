import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Content, Buttons } from "./index";

const Lists = ({ data }) => {
    const [currentNo, setCurrentNo] = useState(0);
    const [currentPost, setCurrentPost] = useState();

    // three events 1) prev 2) next 3) random

    const checkNo = (num) => {
        if (num < 0) {
            console.log(data.length - 1);
            return data.length - 1;
        }
        if (num === data.length) {
            return 0;
        }
        return num;
    };

    console.log(currentNo);
    const prev = () => {
        setCurrentNo((prev) => {
            return checkNo(prev - 1);
        });
    };

    const next = () => {
        setCurrentNo((prev) => {
            return checkNo(prev + 1);
        });
    };

    const randomize = () => {
        setCurrentNo((prev) => {
            let newNo = Math.floor(Math.random() * data.length);
            if (newNo === prev) {
                return checkNo(newNo + 1);
            }
            return newNo;
        });
    };

    useEffect(() => {
        setCurrentPost(data[currentNo]);
    }, [currentNo, data]);

    return (
        <Container>
            {console.log("render")}
            <Content {...currentPost} />
            <Buttons prev={prev} next={next} randomize={randomize} />
        </Container>
    );
};

const Container = styled.div`
    background: white;
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s linear;
    text-align: center;
`;

export default Lists;
