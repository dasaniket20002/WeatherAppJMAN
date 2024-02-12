import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import { RegisterPage } from './components/RegisterPage';
 
const api = {
    key: "195887370f9dafce79b410c97c2925f5",
    base: "https://api.openweathermap.org/data/2.5/",
}
 
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
 
export default App;