import React, { useState } from "react";
import styled from "styled-components";
import { FaAngleDoubleRight } from "react-icons/fa";

const Content = ({ title, company, dates, duties, id }) => {
    const [hide, setHide] = useState(true);

    const infoHandler = () => {
        setHide(!hide);
    };
    return (
        <>
            <Text>{title}</Text>
            <Company>{company}</Company>
            <Date>{dates}</Date>
            <ContentContainer hide={hide}>
                {duties.map((task, idx) => {
                    return (
                        <Grid key={idx}>
                            <Icon>
                                <FaAngleDoubleRight />
                            </Icon>
                            <Desc>{task}</Desc>
                        </Grid>
                    );
                })}
            </ContentContainer>
            <Btn onClick={infoHandler}>more info</Btn>
        </>
    );
};

const Text = styled.h3`
    font-weight: 400;
    font-size: 1.25rem;
    letter-spacing: 0.1rem;
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
`;

const Company = styled.h4`
    text-transform: uppercase;
    color: #617d98;
    background: #dae2ec;
    display: inline-block;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    letter-spacing: 0.1rem;
    line-height: 1.25;
    margin-bottom: 0.75rem;
`;

const Date = styled.p`
    margin-bottom: 1.25rem;
    color: #617d98;
    color: #617d98;
`;

const ContentContainer = styled.div`
    ${(prop) =>
        prop.hide
            ? `visibility: hidden;
  opacity: 0; height: 0;`
            : `visibility: visible; opacity: 1; height: 100%;`}
    transition: visibility 0.3s, opacity 0.3s, height 0.9s linear;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 2rem;
    column-gap: 2rem;
    align-items: center;
    margin-bottom: 1.25rem;
`;

const Desc = styled.p`
    margin-bottom: 0;
    color: #324d67;
`;

const Icon = styled.div`
    color: #2caeba;
`;

const Btn = styled.button`
    text-transform: uppercase;
    background: #2caeba;
    color: #bff8fd;
    padding: 0.375rem 0.75rem;
    letter-spacing: .1rem;
    font-weight: 700;
    transition: all .3s linear;
    font-size: .875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
    border-radius: 0.25rem;
    display: block;
    width: 12rem;
    text-align: center;
    margin: 3rem auto 0;
    
}
`;

export default Content;
