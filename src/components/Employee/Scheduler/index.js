import React from 'react';
import { Link } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaArrowRight} from 'react-icons/fa';
import {ImCross} from 'react-icons/im';
import {BsArrowLeft} from 'react-icons/bs';
import './style.css'

function Scheduler() {

    const toastConfig = {
        "position":"top-right",
        "autoClose":5000,
        "hideProgressBar":false,
        "newestOnTop":false,
        "rtl":false,
        "pauseOnHover":true
    }

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const currentMnth = months[new Date().getMonth()];
    const nextMnth = months[new Date().getMonth() + 1];

    const [month,setMonth] = React.useState(currentMnth);
    const [noOfDays,setNoOfDays] = React.useState([]);
    const [bookDates,setBookDates] = React.useState([]);
    const [loading,setLoading] = React.useState(false);

    const [popOpen,setPopOpen] = React.useState(false);
    const [fromTime,setFromTime] = React.useState('');
    const [toTime,setToTime] = React.useState('');

    React.useEffect(()=>{
        if(month === 'January' || month === 'March' || month === 'May' || month === 'August' || month === 'July' || month === 'October' || month === 'December'){
            let days = [];
            for(let i=0;i<31;i++){
                days.push(i+1);
            }
            setNoOfDays([...days]);
        }else{
            let days = [];
            for(let i=0;i<30;i++){
                days.push(i+1);
            }
            setNoOfDays([...days]);        }
    },[month])

    const handleDate = (day) => {
        console.log(bookDates);

        day = Number(day);
        let nowDate = Number(bookDates[bookDates.length - 1]);

        if(!bookDates.length > 0){
            let arr = [...bookDates];
            arr.push(day);
            setBookDates(arr);
        } else if (day === nowDate+1 || day === nowDate-1){
            let arr = [...bookDates];
            arr.push(day);
            setBookDates(arr);
        } else {
            toast.error('Please select consecutive days.',toastConfig);
        }
    }

    const handleNext = () => {
        if(bookDates.length < 1){
            toast.error('Please select some dates before moving forward.')
        }else{
            setPopOpen(true);
        }
    }

    const handlePublish = () => {
        if(fromTime === '' && toTime === ''){
            toast.error('Please select timings',toastConfig);
        }else{
            setLoading(true);

            let obj = {
                month : month,
                dates : [...bookDates],
                fromTime : fromTime,
                toTime : toTime
            }

            /* Object is creating and printing we can store this into database */
            console.log(obj);

            setTimeout(()=>{
                window.location.href = "/emp/dashboard";
            },2000)
        }
    }

    return (
        <div className='outer1'>
            <ToastContainer />

            {/* This popup box will appear once click next */}
                
            {
                popOpen
                ? <div className='pop-window'>
                    <div className='pop-msg'>
                        <div className='btn-lf' style={{width:'100%'}}>
                            <ImCross className='icon' onClick={()=>{
                                setPopOpen(false);
                                setLoading(false);
                            }}/>
                        </div>
                        <h1>Select Timings</h1>
                        <p>Selected Dates : {month} {bookDates.map(day => day + ' ')}</p>
                        <div className='row-wrap'>
                            <div className='input-wrap'>
                                <p>From</p>
                                <input type="time" className='timer' onChange={(e) => setFromTime(e.target.value)}/>
                            </div>
                            <div className='input-wrap'>
                                <p>To</p>
                                <input type="time" className='timer' onChange={(e) => setToTime(e.target.value)}/>
                            </div>
                        </div>
                        {
                            loading
                            ? <button className='button1' style={{width:'100%',marginTop:'2rem',filter:'brightness(0.7)'}}>Loading...</button>
                            : <button className='button1' style={{width:'100%',marginTop:'2rem'}} onClick={handlePublish}>Publish</button>
                        }
                    </div>
                </div>
                : ''
            }

            <div className='inner1'>
                <div className='header1'>
                    <h1>Schedule Interview</h1>
                    <Link className='button1' to={"/emp/dashboard"}><BsArrowLeft className='icon'/> Back</Link>
                </div>

                <div className='schedule-form'>
                    <div className='input-wrap'>
                        <p>Select a month</p>
                        <select defaultValue={month} onChange={(e) => setMonth(e.target.value)}>
                            <option value={currentMnth}>{currentMnth}</option>
                            <option value={nextMnth}>{nextMnth}</option>
                        </select>
                    </div>

                    <div className='month-grid'>
                        <p>Select a continous date slot</p>
                        <div className='grid-box'>
                            {
                                noOfDays.map(day => 
                                    bookDates.indexOf(day) !== -1
                                    ? <div className='grid-box-element selected' key={day} 
                                        style={{pointerEvents:'none'}}
                                    >{day}</div>
                                    : <div className='grid-box-element' key={day} 
                                        onClick={
                                            () => handleDate(day)
                                        }
                                    >{day}</div>
                                )
                            }
                        </div>
                    </div>
                </div>

                <div className='btn-lf'>
                    <button className='button1' onClick={handleNext}>Next <FaArrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default Scheduler