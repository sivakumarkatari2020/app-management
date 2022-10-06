import React from 'react';
import {Routes , Route ,Navigate} from 'react-router-dom';
import './App.css';
import User from './components/Employee';
import Login from './components/Login';
import Admin from './components/Recruiter';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate replace to="/login" />}></Route>
        <Route path="/user/*" element={<User />}></Route>
        <Route path="/admin/*" element={<Admin />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;