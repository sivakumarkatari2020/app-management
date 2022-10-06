import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

function Login() {

    const toastConfig = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    }

    const [mail,setMail] = useState('');
    const [password,setPassword] = useState('');
    const [checked,setChecked] = useState(false);
    const [isSubmit,setSubmit] = useState(false);
    const [loginType,setLoginType] = useState('User');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(mail.length < 3){
            console.log("Mail ID shoudn't be less than 3 charecters");
            toast.info("Mail ID shoudn't be less than 3 charecters",toastConfig)
            setSubmit(false);
            return;
        }
        if(!(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(mail))){
            console.log("Invalid Mail id,Please check!!");
            toast.info("Invalid Mail id,Please check!!",toastConfig);  
            setSubmit(false);
            return;
        }
        if(password.length < 3){
            console.log("Password must contain 8 charecters in length");
            toast.info("Password must contain 8 charecters in length",toastConfig);  
            setSubmit(false);
            return;
        }
        if(!(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(password)&&password.length>4)){
            console.log("Password validation failed!!");
            toast.info("Password validation failed!!",toastConfig);  
            setSubmit(false);
            return;
        }

        toast.success("Logged in successfully!redirecting...",toastConfig);  
        if(loginType === 'User'){
            setTimeout(()=>{
                window.location.href = "/user/dashboard";
            },1000) 
        }else{
            setTimeout(()=>{
                window.location.href = "/admin/dashboard";
            },1000) 
        }
    }

    const handleSwitch = (tab) => {
        if(tab === 1){
            setLoginType('User');
        }else{
            setLoginType('Admin');
        }
    }

    return (
        <div className={loginType === 'Admin' ? 'layout' : 'layout1'}>
            <ToastContainer />
        {
            isSubmit
            ? 'Loading...'
            : <>
                <div className='login-outer'>
                    <form className={loginType === 'Admin' ? 'login-form' : 'login-form1'}>
                        <div className='logo'>
                            <h3>Login as</h3>
                            <div className={loginType === 'Admin' ? 'switcher' : 'switcher1'}>
                                {
                                    loginType === 'Admin'
                                    ? <label className='switch-activer' style={{animation:'switch-movement 1s 1 forwards'}}></label>
                                    : <label className='switch-activer1' style={{animation:'switch-movement2 1s 1 forwards'}}></label>
                                }
                                <div className='switch' onClick={()=>handleSwitch(1)}>User</div>
                                <div className='switch' onClick={()=>handleSwitch(2)}>Admin</div>
                            </div>
                        </div>
                        <div className={loginType === 'Admin' ? 'login-section' : 'login-section1'}>
                            <label>Email :</label>
                            <input type="text" 
                                    name='inp-mail'
                                    value={mail}
                                    onChange={(e)=>setMail(e.target.value)}
                                    placeholder='John@example.com'
                                    className='login-mail'
                            ></input>
                        </div>
                        <div className={loginType === 'Admin' ? 'login-section' : 'login-section1'}>
                            <label>Password :</label>
                            <input type="password" 
                                    name='inp-pass'
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    placeholder='password'
                                    className='login-pass'
                            ></input>
                        </div>
                        <div className='login-checkbox'>
                            <input 
                                type='checkbox' 
                                name='inp-chk'
                                checked={checked}
                                onChange={()=>setChecked(!checked)}
                            ></input>
                            <label>Remeber me</label>
                        </div>
                        <button className={loginType === 'Admin' ? 'login-button' : 'login-button1'} onClick={handleSubmit}>login</button>
                        <Link className='link-ext' to='/register'>Don't have an account ? Create Account here.</Link>
                    </form>
                </div>
                <div className='illustration'>
                    {
                        loginType === 'Admin'
                        ? <img src={require('../../assets/images/illu-2.png')} alt='simple-illustration' width="400" height="500" className='login-1' style={{animation: 'illu-movement 1s 1 forwards'}}/>
                        : <img src={require('../../assets/images/illu-1.png')} alt='simple-illustration' width="400" height="500" className='login-1' style={{animation: 'illu-movement2 1s 1 forwards'}}/>
                    }
                </div>
            </>
        }
        </div>
    )
}

export default Login