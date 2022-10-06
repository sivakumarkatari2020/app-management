import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BsArrowLeft,BsCheck} from 'react-icons/bs';
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

    const [data,setData] = useState({
        fname: '',
        lname: '',
        mail: '',
        city: '',
        date: ''
    })
    const [file,setFile] = useState();
    const [loading,setLoading] = useState(false);
    const [success,setSuccess] = useState(false);

    const handleChange = (e) => {
        setData({...data,[e.target.name]:e.target.value});
    }

    const handleFile = (e) => {
        setFile(e.target.files[0].name);
    }

    const handleSubmit = () => {
        if(data.fname.length < 3){
            toast.error("Please enter a valid Firstname",toastConfig);
        }else if(data.lname.length < 3){
            toast.error("Please enter a valid Lastname",toastConfig);
        }else if(!/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(data.mail)){
            toast.error("Please enter a valid email",toastConfig);
        }else if(data.city.length < 3){
            toast.error("Please enter a valid city name",toastConfig);
        }else if(data.date === ''){
            toast.error("Select a date from the calendar",toastConfig);
        }else{
            setLoading(true);
            setTimeout(()=>{
                setSuccess(true);
                setLoading(false);
            },2000);
        }
    }

    return (
        <div className='outer1'>
            <ToastContainer />
            <div className='inner1'>
                <div className='header'>
                    <Link className='nav-option' to={"/user/dashboard"}><BsArrowLeft className='icon'/> <span>Back</span></Link>
                </div>
                {
                    success
                    ? <div className='success-status'>
                        <BsCheck className='iconBg'/>
                        <h2>Successfully Scheduled</h2>
                    </div>
                    : <div className='form event-form'>
                        <h1>Event Registration</h1>
                        <div className='inner-form'>
                            <div className='flex-row'>
                                <div className='input-holder'>
                                    <label>Firstname</label>
                                    <input type='text' name='fname' value={data.fname} onChange={handleChange} placeholder='John'></input>
                                </div>
                                <div className='input-holder'>
                                    <label>Lastname</label>
                                    <input type='text' name='lname' value={data.lname} onChange={handleChange} placeholder='Walker'></input>
                                </div>
                            </div>
                            <div className='flex-row'>
                                <div className='input-holder'>
                                    <label>Email</label>
                                    <input type='mail' name='mail' value={data.mail} onChange={handleChange} placeholder='John@gmail.com'></input>
                                </div>
                                <div className='input-holder'>
                                    <label>City</label>
                                    <input type='text' name='city' value={data.city} onChange={handleChange} placeholder='e.g Mumbai'></input>
                                </div>
                            </div>
                            <div className='flex-row'>
                                <div className='input-holder'>
                                    <label>Event Date</label>
                                    <input type='date' name='date' value={data.date} onChange={handleChange} placeholder='12/09/2022'></input>
                                </div>
                                <div className='input-holder'>
                                    <label>Upload files here</label>
                                    {
                                        file
                                        ? <p>File : {file}</p>
                                        : <input type='file' onChange={handleFile}></input> 
                                    }
                                </div>
                            </div>

                            {
                                loading
                                ? <div className='loader'><span></span></div>
                                : <div className='button-holder'>
                                    <button className='full-width-button' onClick={handleSubmit}>submit</button>
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Scheduler