import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Values from "values.js";

import Heading from "./components/Heading";
import Color from "./components/Color";

const Generator = () => {
    const [color, setColor] = useState();
    const [error, setError] = useState(false);
    const [list, setList] = useState(new Values("red").all(10));

    const refContainer = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setColor(refContainer.current.value);
        let color = refContainer.current.value;
        try {
            let colors = new Values(color).all(10);
            setList(colors);
            setError(false);
        } catch (error) {
            setError(true);
        }
    };

    return (
        <Wrapper>
            <Container>
                <Heading
                    handleSubmit={handleSubmit}
                    refContainer={refContainer}
                    color={color}
                    error={error}
                />
            </Container>
            <ColorContainer>
                {list.map((color, idx) => {
                    return (
                        <Color
                            key={idx}
                            {...color}
                            index={idx}
                            hexColor={color.hex}
                        />
                    );
                })}
            </ColorContainer>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background: #f1f5f8;
    min-height: 100vh;
    height: 100%;
`;

const Container = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    height: 100px;
    padding-left: 2rem;
    h3 {
        margin-bottom: 0;
        margin-right: 2rem;
        font-size: 1.25rem;
        line-height: 1;
        text-transform: capitalize;
    }
`;

const ColorContainer = styled.div`
    min-height: calc(100vh - 100px);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(223.33px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(96px, 1fr));
`;

export default Generator;
