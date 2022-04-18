import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || '/';


    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    if(user){
        navigate(from, { replace: true });
    }

    const handleSubmitForm = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password);

    }


    return (
        <div className='form-container'>
            <div>
            <h2 className='form-text'>LOGIN</h2>
            <form onSubmit={handleSubmitForm}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
            </div>
            <p>{error?.message}</p>
            {
                loading && <p>Loading..</p>
            }
            <input className='form-submit' type="submit" value="Login" />
            </form>
            <p>
                New on Ema-John? <Link className='form-link' to='/signup'>Create an account</Link>
            </p>
            <div className="or-section">
                <p className='or-text'>OR</p>
            </div>
            <div className="button-area">
                <button className='button-google'>
                    <p className='button-text'>Connect with Google</p>
                </button>
            </div>
            </div>
        </div>
    );
};

export default Login;