import React from "react";
import { useGlobalContext, AppProvider } from "./context";

// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items

const Main = () => {
    const { loading } = useGlobalContext();
    if (loading) {
        return (
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        );
    }
    console.log("rendererd");
    return (
        <main>
            <Navbar />
            <CartContainer />
        </main>
    );
};

export default Main;
