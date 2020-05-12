import React from 'react';
import axios from 'axios';

const {useState} = React;

function InputField(props) {
    return (
        <input type='text' className="shadow-input bg-white rounded p-2 ${props.className}"></input>
    );
}

function Signup() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({});
    const onSubmit = function (event) {
        event.preventDefault();
        axios.put('api/user/create', {name: firstName, email, password})
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
                <h1 className='text-2xl font-extrabold text-grey4'>Welcome To YearBook</h1>
                <h1 className='text-sm text-grey4'>Sign up here.</h1>
            </div>
            <div className="flex w-full justify-between mb-6">
                <input placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}
                       className="shadow-input bg-white rounded p-4 flex-1 mr-6"/>
                <input placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}
                       className="shadow-input bg-white rounded p-4 flex-1"/>
            </div>
            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                   className="shadow-input bg-white rounded p-4 w-full mb-6"/>
            {error['email'] && <p className="text-red text-sm">{error['email']}</p>}
            <input placeholder="Password" type="password" value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   className="shadow-input bg-white rounded p-4 w-full mb-8"/>
            <button className="rounded bg-blue py-2 px-6 text-white mb-2" onClick={onSubmit}>Sign Up</button>
            <p className="text-sm text-grey4"> Already have an account? <a className="text-blue" href='#'>Sign in.</a></p>

        </div>
    );
}

export default Signup;
