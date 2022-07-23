import React from "react";
import { AppProvider } from "./context";

// components
import Main from "./Main";

const Cart = () => {
    return (
        <AppProvider>
            <Main />
        </AppProvider>
    );
};

export default Cart;
