import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Birthday, Tour, Review } from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="birthday" element={<Birthday />} />
                <Route path="tour" element={<Tour />} />
                <Route path="review" element={<Review />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
