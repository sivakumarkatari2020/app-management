import React,{useState} from 'react';
import { toast, ToastContainer } from 'react-toastify';
import {BsCheck} from 'react-icons/bs';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

function Register() {
    const toastConfig = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    }

    const [mail,setMail] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [repass,setRespass] = useState('');

    const [loading,setLoading] = useState(false);
    const [success,setSuccess] = useState(false);

    const handleSubmit = (e) => {
        if(!(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(mail))){
            console.log("Invalid Mail id,Please check!!");
            toast.info("Invalid Mail id,Please check!!",toastConfig);  
            return;
        }else if(password.length < 3){
            console.log("Password must contain 8 charecters in length");
            toast.info("Password must contain 8 charecters in length",toastConfig);  
            return;
        }else if(!(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(password)&&password.length>4)){
            console.log("Password validation failed!!");
            toast.info("Password validation failed!!",toastConfig);  
            return;
        }else if(password !== repass){
            toast.error("Passwords didn't matched");
        }else{
            setLoading(true);
            setTimeout(()=>{
                setSuccess(true);
                setLoading(false);
                setTimeout(()=>{
                    window.location.href = "/user/dashboard";
                },2000)
            },2000)
        }

    }

    return (
        <div className='layout1'>
            <ToastContainer />

            {
                success
                ? <div className='success-status'>
                    <BsCheck className='iconBg'/>
                    <h2>Successfully Registered</h2>
                    <p>You're being redirected...</p>
                </div>
                : <div className='login-outer login-outer-new'>
                    <div className='login-form1 login-form1-new'>
                        <h1>Register</h1>
                        <div className='login-section1'>
                            <label>Email :</label>
                            <input type="text" 
                                    name='inp-mail'
                                    value={mail}
                                    onChange={(e)=>setMail(e.target.value)}
                                    placeholder='John@example.com'
                                    className='login-mail'
                            ></input>
                        </div>
                        <div className='login-section1'>
                            <label>Username :</label>
                            <input type="text" 
                                    name='inp-mail'
                                    value={username}
                                    onChange={(e)=>setUsername(e.target.value)}
                                    placeholder='John@example.com'
                                    className='login-mail'
                            ></input>
                        </div>
                        <div className='login-section1'>
                            <label>Password :</label>
                            <input type="password" 
                                    name='inp-pass'
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    placeholder='password'
                                    className='login-pass'
                            ></input>
                        </div>
                        <div className='login-section1'>
                            <label>Re-enter Password :</label>
                            <input type="password" 
                                    name='inp-pass'
                                    value={repass}
                                    onChange={(e)=>setRespass(e.target.value)}
                                    placeholder='password'
                                    className='login-pass'
                            ></input>
                        </div>
                        {
                            loading 
                            ? <div className='loader'><span></span></div>
                            : <button className='login-button1' onClick={handleSubmit}>Register</button>
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default Register