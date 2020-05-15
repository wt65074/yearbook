import React from 'react';
import axios from "axios";

function VerifyEmail() {

    const resend = (event) => {
        event.preventDefault();
        axios.post('/email/resend')
            .then(res => {
                console.log("Res: ");
                console.log(res);
            })
            .catch(err => {
                console.log("Err: ");
            })
    };

    return (
        <div className='flex flex-col items-center h-full justify-center w-1/2'>
            <div className='mb-8 flex flex-col items-center'>
                <h1 className='text-2xl font-extrabold text-grey4'>We sent you an email verification link.</h1>
                <h1 className='text-sm text-grey4 mb-6'>If you did not recieve the email, you can request a new one <button className='text-blue' onClick={resend}>here</button>.</h1>
            </div>
        </div>
    );
}

export default VerifyEmail;
