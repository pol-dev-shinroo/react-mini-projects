import React from "react";
import styled from "styled-components";
import hero from "../hero.svg";
import phone from "../phone.svg";

const Hero = () => {
    return (
        <Wrapper>
            <Container>
                <Center>
                    <Info>
                        <h1>
                            Payments infrastructure <br />
                            for the internet
                        </h1>
                        <p>
                            Millions of companies of all sizes—from startups to
                            Fortune 500s—use Stripe’s software and APIs to
                            accept payments, send payouts, and manage their
                            businesses online.
                        </p>
                        <Btn>start now</Btn>
                    </Info>
                    <Phone>
                        <Img src={phone} alt="phone" />
                    </Phone>
                </Center>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    min-height: 100vh;
    margin-top: -5rem;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
`;

const Container = styled.div`
    background: url(${hero});
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;
    width: 100%;
    height: 65%;
`;

const Center = styled.div`
    width: 90vw;
    max-width: 1170px;
    display: grid;
    align-items: center;
    margin: auto;
    @media screen and (min-width: 800px) {
        grid-template-columns: 2fr 1fr;
    }
    @media screen and (min-width: 1200px) {
        grid-template-columns: 2fr 1fr;
        align-items: end;
        padding-bottom: 12vh;
    }
    @media screen and (min-width: 1400px) {
        padding-bottom: 20vh;
    }
`;

const Info = styled.div`
    margin-top: 17rem;
    width: 100%;
    h1 {
        text-transform: none;
        max-width: 500px;
        margin-bottom: 2rem;
    }
    p {
        max-width: 35em;
        line-height: 1.8;
        margin-bottom: 1rem;
    }

    @media screen and (min-width: 800px) {
        h1 {
            font-size: 3rem;
        }
        p {
            font-size: 1.25rem;
        }
    }
    @media screen and (min-width: 1200px) {
        max-width: 100%;
        font-size: 5.5rem;
    }
`;

const Btn = styled.button`
    font-size: 1rem;
    padding: 0.25rem 0.75rem;
    border-radius: 0.25rem;
    border-color: transparent;
    color: white;
    background: black;
    cursor: pointer;
    transition: all 0.3s linear;
    :hover {
        background: hsl(205, 78%, 60%);
    }
`;

const Phone = styled.div`
    display: none;
    @media screen and (min-width: 800px) {
        display: block;
        justify-self: center;
    }
    @media screen and (min-width: 800px) {
        align-self: end;
    }
`;

const Img = styled.img`
    @media screen and (min-width: 800px) {
        width: 12rem;
    }
    @media screen and (min-width: 1200px) {
        width: 15rem;
    }
    @media screen and (min-width: 1400px) {
        width: 17rem;
    }
`;

export default Hero;
