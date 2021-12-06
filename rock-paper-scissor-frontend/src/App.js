import './App.css';
import { useState } from 'react';
import Login from './components/Login';
import Registration from './components/Registration';
import GamePage from './components/GamePage';
import { Routes, Route } from 'react-router-dom';

function App() {

  const [user, setLoginUser] = useState({})

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={(user && user._id ? <GamePage user={user} setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />)}/>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login setLoginUser={setLoginUser}/>} />
      </Routes>
    </div>
  )
}

export default App;
