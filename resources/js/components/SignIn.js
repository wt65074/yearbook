import React from 'react';
import axios from 'axios';
import StyledInput from "./StyledInput";
import {Link} from "react-router-dom";

const {useState} = React;

function SignIn(props) {
    console.log("Sign In");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({});

    const onSubmit = (event) => {
        event.preventDefault();
        axios.put('api/user/login', {email, password})
            .then(res => {
                console.log("Res: ");
                console.log(res);
            })
            .catch(err => {
                console.log("Err: ");
                console.log(err.response);
                setError(err.response.data.errors)
            })
    };

    return (
        <div className='flex flex-col items-center h-full justify-center w-1/2'>
            <div className='mb-8 flex flex-col items-center'>
                <h1 className='text-2xl font-extrabold text-grey4'>Welcome To Yearbook</h1>
                <h1 className='text-sm text-grey4 mb-6'>Log in with your Stanford email here.</h1>
                {error['credentials'] &&
                <p className="text-red text-sm mt-2 px-2">Sorry, it looks like you've entered the wrong email or
                    password.</p>}
            </div>
            <form className='w-full flex flex-col items-center justify-center' onSubmit={onSubmit}>
                <StyledInput placeholder="Email" value={email} type='email' onChange={(e) => setEmail(e.target.value)}
                             className="w-full mb-6" error={error['email']}/>
                <StyledInput placeholder="Password" value={password} type='password'
                             onChange={(e) => setPassword(e.target.value)}
                             className="w-full mb-8" error={error['password']}/>
                <button type='submit' className="rounded shadow-button bg-blue py-2 px-6 text-white mb-4">Log In
                </button>
            </form>
            <p className="text-sm text-grey4"> Don't have an account? <Link className="text-blue" to='/signup'>Sign
                Up</Link>
            </p>
            <Link to='/forgotpassword' className="text-sm text-blue">Forgot Password?</Link>
        </div>
    )
}

export default SignIn;
