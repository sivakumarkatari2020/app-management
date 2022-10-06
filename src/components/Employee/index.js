import React from 'react';
import {Routes , Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Scheduler from './Scheduler';

function User() {
    return (
        <div>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/scheduler" element={<Scheduler />}></Route>
            </Routes>
        </div>
    )
}

export default User