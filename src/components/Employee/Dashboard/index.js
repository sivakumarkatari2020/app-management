import React from 'react';
import {AiOutlineSchedule} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './style1.css';

function Dashboard() {

    const data = [
        {
            name:'Leanne Graham',
            username:'Bret',
            email: 'Sincere@april.biz',
            address: 'Kulas Light Gwenborough Apt. 556',
            website: 'hidegard.org',
            company: 'Romaguera Croma'
        },
        {
            name:'Erwin Howell',
            username:'Antonette',
            email: 'Shanna@melissa.tv',
            address: 'Victor Plains Wisokyburgh Suite 879',
            website: 'anastasia.net',
            company: 'Deckow Crist'
        },
        {
            name:'Clemantine Bauch',
            username:'Samantha',
            email: 'Nathan@yesenia.net',
            address: 'Duglas Extension McKenziehaven Suite 847',
            website: 'ramiro.info',
            company: 'Romaguera Jacobson'
        },
        {
            name:'Patricia Lebsack',
            username:'Karianne',
            email: 'Julianne.OConner@kory.org',
            address: 'Hoegar Mall South Elvis Apt. 692',
            website: 'kale.biz',
            company: 'Robel Corkey'
        },
        {
            name:'Chelsey Dietrich',
            username:'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            address: 'Skiles Walks Roscoeview Suite 351',
            website: 'demarco.info',
            company: 'Keebier LLC'
        }
    ]

    return (
        <div className='outer1'>
            <div className='inner1'>
                <div className='header1'>
                    <h1>Dashboard</h1>
                    <Link className='button1' to={"/user/scheduler"}>Register Event <AiOutlineSchedule className='icon'/></Link>
                </div>
                <table className='table1'>
                    <thead className='thead1'>
                        <tr className='tr1'>
                            <th className='th1'>S.No</th>
                            <th className='th1'>Name</th>
                            <th className='th1'>Username</th>
                            <th className='th1'>Email</th>
                            <th className='th1'>Address</th>
                            <th className='th1'>Website</th>
                            <th className='th1'>Company</th>
                        </tr>
                    </thead>
                    <tbody className='tbody1'>
                        {
                            data.map((obj,idx) => 
                                <tr className='tr1' key={idx}>
                                    <td className='td1'>{idx+1}</td>
                                    <td className='td1'>{obj.name}</td>
                                    <td className='td1'>{obj.username}</td>
                                    <td className='td1'>{obj.email}</td>
                                    <td className='td1'>{obj.address}</td>
                                    <td className='td1'><a href={obj.website} target='new'>{obj.website}</a></td>
                                    <td className='td1'>{obj.company}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className='info-stats1'>
                    {
                        /*
                            <p>Stats : {data.length} interview's lined up in this month. <Link to={"/user/stats"}>See here</Link></p>
                        */ 
                    }
                </div>
                <div className='btm-buttons1'>
                    <Link to={"/login"} className='button1'>Logout</Link>
                </div>
            </div>
        </div>
    )
}

export default Dashboard