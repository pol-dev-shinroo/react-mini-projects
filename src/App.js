import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    Home,
    Birthday,
    Tour,
    Review,
    Accordion,
    Menu,
    Tabs,
    Slider,
    Lorem,
    Generator,
    Grocery,
    Navbar,
    SideNavbar,
    Stripe,
    Cart,
    Cocktail,
} from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="birthday" element={<Birthday />} />
                <Route path="tour" element={<Tour />} />
                <Route path="review" element={<Review />} />
                <Route path="accordion" element={<Accordion />} />
                <Route path="menu" element={<Menu />} />
                <Route path="tabs" element={<Tabs />} />
                <Route path="slider" element={<Slider />} />
                <Route path="lorem" element={<Lorem />} />
                <Route path="color" element={<Generator />} />
                <Route path="grocery" element={<Grocery />} />
                <Route path="navbar" element={<Navbar />} />
                <Route path="sidenavbar" element={<SideNavbar />} />
                <Route path="stripe" element={<Stripe />} />
                <Route path="cart" element={<Cart />} />
                <Route path="cocktail" element={<Cocktail />}></Route>
                <Route path="*" element={<>wrong page</>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
