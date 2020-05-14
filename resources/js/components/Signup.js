import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import StyledInput from "./StyledInput";

const {useState} = React;

function SignUp() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({});
    const onSubmit = function (event) {
        event.preventDefault();
        axios.put('api/user/create', {firstName, lastName, email, password})
            .then(res => {
                console.log("Res: ");
                console.log(res);
            })
            .catch(err => {
                console.log("Err: ");
                console.log(err.response);
                setError(err.response.data.errors)
            })
    }
    return (
        <div className='flex flex-col items-center h-full justify-center w-1/2'>
            <div className='mb-8 flex flex-col items-center'>
                <h1 className='text-2xl font-extrabold text-grey4'>Welcome To Yearbook</h1>
                <h1 className='text-sm text-grey4'>Sign up with your Stanford email here.</h1>
            </div>
            <div className="flex w-full justify-between mb-6">
                <StyledInput placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}
                            className="w-full flex-1 mr-3" error={error['first_name']}/>
                <StyledInput placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}
                            className="w-full flex-1 ml-3" error={error['last_name']}/>
            </div>
            <StyledInput placeholder="Email" value={email} type='email' onChange={(e) => setEmail(e.target.value)}
                        className="w-full mb-6" error={error['email']}/>
            <StyledInput placeholder="Password" value={password} type='password' onChange={(e) => setPassword(e.target.value)}
                        className="w-full mb-8" error={error['password']}/>
            <button className="rounded shadow-button bg-blue py-2 px-6 text-white mb-4" onClick={onSubmit}>Sign Up</button>
            <p className="text-sm text-grey4"> Already have an account? <Link className="text-blue" to='/signin'>Sign in.</Link>
            </p>

        </div>
    );
}

export default SignUp;
