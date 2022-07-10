import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Birthday } from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="birthday" element={<Birthday />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
