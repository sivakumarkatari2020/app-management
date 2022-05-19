import React from 'react';
import {Routes , Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Scheduler from './Scheduler';
import Stats from './Stats';

function Employee() {
    return (
        <div>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/scheduler" element={<Scheduler />}></Route>
                <Route path="/stats" element={<Stats />}></Route>
            </Routes>
        </div>
    )
}

export default Employee