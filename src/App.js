import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Birthday, Tour, Review, Accordion, Menu, Tabs } from "./pages";

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
            </Routes>
        </BrowserRouter>
    );
}

export default App;
