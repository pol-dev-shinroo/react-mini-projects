import React from "react";
import styled from "styled-components";
import { AppProvider } from "./context";
import { Nav, Hero, Sidebar, Submenu } from "./components/index";

const Stripe = () => {
    return (
        <AppProvider>
            <Wrapper>
                <Nav />
                <Sidebar />
                <Submenu />
                <Hero />
            </Wrapper>
        </AppProvider>
    );
};

const Wrapper = styled.div`
    min-height: 100vh;
    height: 100%;
    background: #f1f5f8;
    line-height: 1.5;
`;

export default Stripe;
