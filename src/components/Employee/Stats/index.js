import React from 'react';
import {Link} from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs';
import {data} from './data.js';
import './style.css';

function Stats() {

    const mnths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const [month,setMonth] = React.useState('January');

    return (
        <div className='outer1'>
            <div className='inner1'>
                <div className='header1'>
                    <h1>View Stats</h1>
                    <Link className='button1' to={"/emp/dashboard"}><BsArrowLeft className='icon'/> Back</Link>
                </div>

                <div className='schedule-form'>
                    <div className='input-wrap'>
                        <p>Select a month</p>
                        <select defaultValue={month} onChange={(e) => setMonth(e.target.value)}>
                            {
                                mnths.map(mnth => <option value={mnth} key={mnth}>{mnth}</option>)
                            }
                        </select>
                    </div>

                    <div className='stat-container'>
                        {
                            data.map(obj => obj.month === month 
                                        ? <div key={obj.month} className='stat-table'>
                                            <div className='stat-container-inner'>
                                                <div className='stat'>
                                                    <label>No of Conducted :</label>
                                                    <p>{obj.no_of_conducted}</p>
                                                </div>
                                            </div>
                                            <div className='stat-container-inner'>
                                                <div className='stat'>
                                                    <label>No of Selected :</label>
                                                    <p>{obj.no_of_selected}</p>
                                                </div>
                                                <div className='stat-graph'>
                                                    <div className='stat-progress' 
                                                        style={{width:`${(obj.no_of_selected / obj.no_of_conducted) * 100 * 3}px`,backgroundColor:'rgb(142, 223, 142)'}}
                                                    ></div>
                                                    <p>{Math.round((obj.no_of_selected / obj.no_of_conducted) * 100)}%</p>
                                                </div>
                                            </div>
                                            <div className='stat-container-inner'>
                                                <div className='stat'>
                                                    <label>No of Rejected :</label>
                                                    <p>{obj.no_of_rejected}</p>
                                                </div>
                                                <div className='stat-graph'>
                                                    <div className='stat-progress' 
                                                        style={{width:`${(obj.no_of_rejected / obj.no_of_conducted) * 100 * 3}px`,backgroundColor:'rgb(246, 112, 112)'}}
                                                    ></div>
                                                    <p>{Math.round((obj.no_of_rejected / obj.no_of_conducted) * 100)}%</p>
                                                </div>
                                            </div>
                                            <div className='stat-container-inner'>
                                                <div className='stat'>
                                                    <label>No of Cancelled :</label>
                                                    <p>{obj.no_of_cancellation}</p>
                                                </div>
                                                <div className='stat-graph'>
                                                    <div className='stat-progress' 
                                                        style={{width:`${(obj.no_of_cancellation / obj.no_of_conducted) * 100 * 3}px`,backgroundColor:'rgb(254, 204, 110)'}}
                                                    ></div>
                                                    <p>{Math.round((obj.no_of_cancellation / obj.no_of_conducted) * 100)}%</p>
                                                </div>
                                            </div>
                                        </div>
                                        : ''
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats;