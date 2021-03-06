import React from 'react';
import axios from 'axios';
import StyledInput from "./StyledInput";
import {
    useParams
} from "react-router-dom";
const queryString = require('query-string');


const {useState} = React;



function ResetPassword(props) {
    const [password, setPassword] = useState('');
    const [passwordConfirmed, setPasswordConfirmed] = useState('');

    const parsed = queryString.parse(props.location.search);

    const [error, setError] = useState({});
    const {token} = useParams();
    const [email, setEmail] = useState(parsed['email'] ?? '');
    const onSubmit = (event) => {
        event.preventDefault();
        axios.post('/password/reset', {email, password_confirmation: passwordConfirmed, password, token})
            .then(res => {
                console.log("Res: ");
                console.log(res);
                window.location = '/home';
            })
            .catch(err => {
                console.log("Err: ");
                console.log(err.response);
                setError(err.response.data.errors ?? {});
            })
    };

    return (
        <div className='flex flex-col items-center h-full justify-center w-1/2'>
            <div className='mb-8 flex flex-col items-center'>
                <h1 className='text-2xl font-extrabold text-grey4'>Forgot Password</h1>
                <h1 className='text-sm text-grey4 mb-6'>Reset your password here!</h1>
                {error['credentials'] &&
                <p className="text-red text-sm mt-2 px-2">Sorry, it looks like you've entered the wrong email or
                    password.</p>}
            </div>
            <form className='w-full flex flex-col items-center justify-center' onSubmit={onSubmit}>
                <input type="hidden" name="token" value={token}/>
                <StyledInput placeholder="Email" value={email} type='email' onChange={(e) => setEmail(e.target.value)}
                             className="w-full mb-6" error={error['email']}/>
                <StyledInput placeholder="Password" value={password} type='password' onChange={(e) => setPassword(e.target.value)}
                                 className="w-full mb-6" error={error['password']}/>
                <StyledInput placeholder="Password" value={passwordConfirmed} type='password' onChange={(e) => setPasswordConfirmed(e.target.value)}
                                 className="w-full mb-6" />
                <button type='submit' className="rounded shadow-button bg-blue py-2 px-6 text-white mb-4">Submit</button>
            </form>
        </div>
    )
}

export default ResetPassword;
