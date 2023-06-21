import './style/App.css';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import SignUp from './pages/SignUp';
import Menu from './components/Menu';
import SendMessage from'./pages/SendMessage'
import {Routes, Route} from 'react-router-dom';
import {socket} from "./socket";





function App() {

    return (
        <div className="App">
            <div id="container">
                <h3 className="glitch">
                    DYBALA
                    <span className="first">DYBALA</span>
                    <span className="second" aria-hidden="true">DYBALA</span>
                </h3>
            </div>
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
