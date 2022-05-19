import React from 'react';
import {Routes , Route } from 'react-router-dom';
import Dashboard from './Dashboard';

function Recruiter() {
    return (
        <div>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />}></Route>
            </Routes>
        </div>
    )
}

export default Recruiter