import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style2.css';

function Dashboard() {

    const [data,setData] = useState([
        {
            fname: 'Harsh Kumar',
            lname: 'Bhogle',
            mail: 'harsh@bhogle.com',
            city: 'Bangalore',
            date: '20/10/2022',
            status: false,
        },
        {
            fname: 'Sravan',
            lname: 'Sangabattula',
            mail: 'sravan.sangabatthula@gmail.com',
            city: 'Hyderabad',
            date: '10/10/2022',
            status: true,
        },
        {
            fname: 'Vamsi Kiran',
            lname: 'Patnala',
            mail: 'vamsiroy@patnala.com',
            city: 'Pune,Maharastra',
            date: '15/10/2022',
            status: false,
        },
        {
            fname: 'Mounica',
            lname: 'Marla',
            mail: 'mounica.marla@gmail.com',
            city: 'Hyderabad',
            date: '22/10/2022',
            status: false,
        },
        {
            fname: 'Pandyan',
            lname: 'Davalagiri',
            mail: 'pandyanpandyan@gmail.com',
            city: 'Noida',
            date: '20/10/2022',
            status: true,
        }
    ])

    const handleToggle = (idx,e) => {
        console.log(data[idx].status);
        let raw = data;
        raw[idx].status = !raw[idx].status;
        setData(raw);
    }

    return (
        <div className='outer'>
            <div className='inner'>
                <div className='header'>
                    <h1>Registered Events</h1>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((obj,idx) => 
                                <tr>
                                    <td>{idx+1}</td>
                                    <td>{obj.fname}</td>
                                    <td>{obj.lname}</td>
                                    <td>{obj.mail}</td>
                                    <td>{obj.city}</td>
                                    <td>{obj.date}</td>
                                    <td className='switch-td'>
                                        <p style={{fontSize:'.5rem'}}>{obj.status ? 'Approved' : 'Rejected'}</p>
                                        <input type="checkbox" className='checkbox' checked={obj.status} onChange={(e) => handleToggle(idx,e)} id={`switch-${idx}`} /><label for={`switch-${idx}`} className='chk-label'>Toggle</label>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className='btm-buttons'>
                    <Link to={"/login"} className='button2'>Logout</Link>
                </div>
            </div>
        </div>
    )
}

export default Dashboard