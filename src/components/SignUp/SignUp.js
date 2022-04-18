import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './SignUp.css';

const SignUp = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [error,setError] = useState('');
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);


    const handleEmailblur = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
    }
    if(user){
        navigate('/shop');
    }
    const handleCreateForm = event =>{
        event.preventDefault();
        if(password !==confirmPassword){
            setError('Your password didnot Match');
        }
        if(password.length <6){
            setError('Password must have 6 or more than');
        }
        createUserWithEmailAndPassword(email,password);
        
    }

    return (
        <div className='form-container'>
            <div>
            <h2 className='form-text'>SIGN UP</h2>
            <form onSubmit={handleCreateForm}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailblur} type="email" name="email" id="" required/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
            </div>
            <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required/>
            </div>
            <p className='errorText'>{error}</p>
            <input className='form-submit' type="submit" value="Sign Up" />
            </form>
            <p>
                Already have account? <Link className='form-link' to='/login'>Login here</Link>
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

export default SignUp;