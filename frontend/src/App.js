import './style/App.css';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import SignUp from './pages/SignUp';
import Menu from './components/Menu';
import SendMessage from './pages/SendMessage';
import { Routes, Route } from 'react-router-dom';
import { socket } from "./socket";

function App() {
    return (
        <div className="App">
            <h1 >
                Console
                <span style={{ color: 'white' }}>
                    .
                    <span style={{ color: '#e06c75' }}>log</span>.
                </span>
               ("
            </h1>
            <div className="string">
                <h1 className="greeting en">Raffaele</h1>
                <h1 className="greeting es">Rossella</h1>
                <h1 className="greeting de">Negro</h1>
            </div><h1 className="closure">");

            </h1>
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/homepage" element={<Homepage />} />
                <Route path="/sendMessage" element={<SendMessage />} />
            </Routes>
        </div>
    );
}

export default App;
