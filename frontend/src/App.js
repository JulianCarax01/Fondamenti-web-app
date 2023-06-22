import './style/App.css';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import SignUp from './pages/SignUp';
import Menu from './components/Menu';
import SendMessage from './pages/SendMessage';
import { Routes, Route } from 'react-router-dom';
import ChatsPanel from "./pages/ChatsPanel";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/homepage" element={<Homepage />} />
                <Route path="/sendMessage" element={<SendMessage />} />
                <Route path="/ChatsPanel" element={<ChatsPanel />} />
            </Routes>
        </div>
    );
}

export default App;
