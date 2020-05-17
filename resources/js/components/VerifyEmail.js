import React, {Fragment} from 'react';
import axios from "axios";

const {useState} = React;

function VerifyEmail() {

    const [sent, setSent] = useState(false);

    const resend = (event) => {
        event.preventDefault();
        axios.post('/email/resend')
            .then(res => {
                console.log("Res: ");
                console.log(res);
                setSent(true);
            })
            .catch(err => {
                console.log("Err: ");
            })
    };

    return (
        <div className='flex flex-col items-center h-full justify-center w-1/2'>
            <div className='mb-8 flex flex-col items-center'>
                {sent
                    ? (<Fragment>
                        <h1 className='text-2xl font-extrabold text-grey4'>Success</h1>
                        <h1 className='text-sm text-grey4 mb-6'>Your verification email has been sent. <button className='text-blue' onClick={resend}>here</button>.</h1>
                    </Fragment>)
                    : (<Fragment>
                        <h1 className='text-2xl font-extrabold text-grey4'>We sent you an email verification link.</h1>
                        <h1 className='text-sm text-grey4 mb-6'>If you did not recieve the email, you can request a new one <button className='text-blue' onClick={resend}>here</button>.</h1>
                    </Fragment>)
                }

            </div>
        </div>
    );
}

export default VerifyEmail;
