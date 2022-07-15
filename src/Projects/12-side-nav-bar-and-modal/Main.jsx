import React from "react";
import styled from "styled-components";
import Home from "./components/Home";
import Modal from "./components/Modal";
import SideNav from "./components/SideBar";
import { AppProvider } from "./context";

const Main = () => {
    return (
        <AppProvider>
            <Wrapper>
                <Home />
                <Modal />
                <SideNav />
            </Wrapper>
        </AppProvider>
    );
};

const Wrapper = styled.div`
    background: #f1f5f8;
    min-height: 100vh;
    height: 100%;
`;

export default Main;
