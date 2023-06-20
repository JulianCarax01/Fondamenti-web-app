import './App.css';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import SignUp from './pages/SignUp';
import Menu from './components/Menu';
import SendMessage from'./pages/SendMessage'
import {Routes, Route} from 'react-router-dom';
import {socket} from "./socket";
import {useState} from "react";





function App() {

    return (
        <div className="App">
            <h1> Nome dell'app </h1>
            <Routes>
                <Route path="/" element={<Menu/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/homepage" element={<Homepage/>}/>
                <Route path="/sendMessage" element={<SendMessage/>}/>
            </Routes>
        </div>
    );
}

export default App;
