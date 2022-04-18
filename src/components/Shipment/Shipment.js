import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    const [phone,setPhone] = useState('');
    const [error,setError] = useState('');
    // const navigate = useNavigate()

    

    const handleNameblur = event =>{
        setName(event.target.value);
    } 

    const handleEmailblur = event =>{
        setEmail(event.target.value);
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handlePhonedBlur = event =>{
        setPhone(event.target.value);
    }
    // if(user){
    //     navigate('/shop');
    // }
    const handleCreateForm = event =>{
        event.preventDefault();
        const shipping = {name,email,address,phone};
        console.log(shipping);
        
        
    }
    return (
        <div className='form-container'>
            <div>
            <h2 className='form-text'>Shipping Info</h2>
            <form onSubmit={handleCreateForm}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input onBlur={handleNameblur} type="text" name="name" id="" required/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input value={user?.email} readOnly type="email" name="email" id="" required/>
            </div>
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input onBlur={handleAddressBlur} type="text" name="address" id="" required/>
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input onBlur={handlePhonedBlur} type="text" name="text" id="" required/>
            </div>
            <p className='errorText'>{error}</p>
            <input className='form-submit' type="submit" value="Shipping Now" />
            </form>
            
            
            
            </div>
        </div>
    );
};

export default Shipment;