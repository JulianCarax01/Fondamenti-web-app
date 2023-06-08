import React from "react";
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import {Routes, Route} from 'react-router-dom';
import Menu from "./components/Menu";

export default function App() {
    return (
        <div >
            <Menu />
            <main>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/SignUp" element={<SignUp />} />
                </Routes>
            </main>
        </div>
    );
}




