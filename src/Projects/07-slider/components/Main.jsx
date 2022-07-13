import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaQuoteRight } from "react-icons/fa";
import Buttons from "./Buttons";

const Main = ({ people }) => {
    const [index, setIndex] = useState(1);

    useEffect(() => {
        if (index < 0) {
            setIndex(people.length - 1);
        }
        if (index > people.length - 1) {
            setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);

    return (
        <SliderBox>
            {people.map((person, idx) => {
                const { id, image, name, title, quote } = person;
                let position = "nextSlide";
                if (idx === index) {
                    position = "activeSlide";
                }
                if (
                    idx === index - 1 ||
                    (index === 0 && idx === people.length - 1)
                ) {
                    position = "lastSlide";
                }

                return (
                    <MainSlider position={position} key={id}>
                        <Image src={image} alt={name} />
                        <Name>{name}</Name>
                        <Job>{title}</Job>
                        <Text>{quote}</Text>
                        <Icon>
                            <FaQuoteRight />
                        </Icon>
                        <Buttons index={index} setIndex={setIndex} />
                    </MainSlider>
                );
            })}
        </SliderBox>
    );
};

const SliderBox = styled.div`
    margin: 0 auto;
    margin-top: 4rem;
    min-width: 450px;
    width: 80vw;
    height: 450px;
    max-width: 800px;
    text-align: center;
    position: relative;
    display: flex;
    overflow: hidden;
`;

const MainSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.3s linear;
    ${(prop) => prop.position === "nextSlide" && `transform: translateX(100%);`}
    ${(prop) =>
        prop.position === "activeSlide" &&
        `opacity: 1;
  transform: translateX(0);`}
  ${(prop) => prop.position === "lastSlide" && `transform: translateX(-100%);`}
`;

const Image = styled.img`
    border-radius: 50%;
    margin-bottom: 1rem;
    width: 150px;
    height: 150px;
    object-fit: cover;
    border: 4px solid var(--clr-grey-8);
    box-shadow: var(--dark-shadow);
`;

const Name = styled.h4`
    text-transform: uppercase;
    color: hsl(21, 62%, 45%);
    margin-bottom: 0.25rem;
    font-size: 0.875rem;
`;

const Job = styled.p`
    text-transform: capitalize;
    margin-bottom: 0.75rem;
    color: hsl(209, 34%, 30%);
    margin-bottom: 1.25rem;
`;

const Text = styled.p`
    max-width: 35em;
    margin: 2rem auto 1.25rem auto;
    line-height: 2;
    color: hsl(210, 22%, 49%);
`;

const Icon = styled.div`
    font-size: 3rem;
    margin-top: 1rem;
    color: hsl(21, 62%, 45%);
`;

export default Main;
