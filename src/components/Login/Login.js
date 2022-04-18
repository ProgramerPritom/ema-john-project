import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
            <h2 className='form-text'>LOGIN</h2>
            <form action="">
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" required/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" required/>
            </div>
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