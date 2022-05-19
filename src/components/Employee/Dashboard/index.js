import React from 'react';
import {AiOutlineSchedule} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './style1.css';

function Dashboard() {

    const data = [
        {
            b_date: '18-05-2022',
            b_time: '5:00 PM IST GM+5:30',
            recruiter: 'Andrew Garfield',
            type: 'L1'
        },
        {
            b_date: '21-05-2022',
            b_time: '1:00 PM IST GM+5:30',
            recruiter: 'Tobey Maguire',
            type: 'L2'
        },
        {
            b_date: '24-05-2022',
            b_time: '11:00 AM IST GM+5:30',
            recruiter: 'Tom Riddle',
            type: 'L1'
        },
        {
            b_date: '30-05-2022',
            b_time: '9:30 AM IST GM+5:30',
            recruiter: 'TOm Holland',
            type: 'L2'
        }
    ]

    return (
        <div className='outer1'>
            <div className='inner1'>
                <div className='header1'>
                    <h1>Dashboard</h1>
                    <Link className='button1' to={"/emp/scheduler"}>Schedule Interview <AiOutlineSchedule className='icon'/></Link>
                </div>
                <table className='table1'>
                    <thead className='thead1'>
                        <tr className='tr1'>
                            <th className='th1'>S.No</th>
                            <th className='th1'>Booked Date</th>
                            <th className='th1'>Booked Time</th>
                            <th className='th1'>Recruiter Name</th>
                            <th className='th1'>Type of Interview</th>
                        </tr>
                    </thead>
                    <tbody className='tbody1'>
                        {
                            data.map((obj,idx) => 
                                <tr className='tr1' key={idx}>
                                    <td className='td1'>{idx+1}</td>
                                    <td className='td1'>{obj.b_date}</td>
                                    <td className='td1'>{obj.b_time}</td>
                                    <td className='td1'>{obj.recruiter}</td>
                                    <td className='td1'>{obj.type}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className='info-stats1'>
                    <p>Stats : {data.length} interview's lined up in this month. <Link to={"/emp/stats"}>See here</Link></p>
                </div>
                <div className='btm-buttons1'>
                    <button className='button1'>Reports</button>
                    <Link to={"/login"} className='button1'>Logout</Link>
                </div>
            </div>
        </div>
    )
}

export default Dashboard