import React from 'react';
import {Routes , Route ,Navigate} from 'react-router-dom';
import './App.css';
import Employee from './components/Employee';
import Login from './components/Login';
import Recruiter from './components/Recruiter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate replace to="/login" />}></Route>
        <Route path="/emp/*" element={<Employee />}></Route>
        <Route path="/recruiter/*" element={<Recruiter />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;