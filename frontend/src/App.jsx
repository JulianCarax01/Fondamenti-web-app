import React from "react";
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import {Routes, Route} from 'react-router-dom';

export default function App(){ return(
    <main>
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
    </Routes>
    </main>
)}