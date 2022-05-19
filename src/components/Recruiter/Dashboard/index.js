import React from 'react';
import {AiOutlineSchedule} from 'react-icons/ai';
import './style2.css';

function Dashboard() {

    const data = [
        {
            p_name: 'Panel Chandra',
            b_date: '18-05-2022',
            b_time: '5:00 PM IST GM+5:30',
            type: 'L1'
        },
        {
            p_name: 'Panel MJ',
            b_date: '21-05-2022',
            b_time: '1:00 PM IST GM+5:30',
            type: 'L2'
        },
        {
            p_name: 'Panel Sasikar',
            b_date: '24-05-2022',
            b_time: '11:00 AM IST GM+5:30',
            type: 'L1'
        },
        {
            p_name: 'Panel Steph',
            b_date: '30-05-2022',
            b_time: '9:30 AM IST GM+5:30',
            type: 'L2'
        }
    ]

    return (
        <div className='outer'>
            <div className='inner'>
                <div className='header'>
                    <h1>Booked Slots</h1>
                    <button>Book a slot <AiOutlineSchedule className='icon'/></button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Panel Name</th>
                            <th>Interview Date</th>
                            <th>Interview Time</th>
                            <th>Type of Interview</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((obj,idx) => 
                                <tr>
                                    <td>{idx+1}</td>
                                    <td>{obj.p_name}</td>
                                    <td>{obj.b_date}</td>
                                    <td>{obj.b_time}</td>
                                    <td>{obj.type}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className='info-stats'>
                    <p>Stats : {data.length} interview's lined up in this month.</p>
                </div>
                <div className='btm-buttons'>
                    <button>Show Completed</button>
                    <button>Show Cancelled</button>
                    <button>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard