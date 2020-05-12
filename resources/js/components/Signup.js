import React from 'react';
import axios from 'axios';

const {useState} = React;

function InputField(props) {
    return (
        <input type='text' className='shadow-input rounded p-2'></input>
    );
}

function Signup() {
    return (
        <div className='m-auto flex flex-col w-fill align-center'>
            <h className='text-2xl font-extrabold text-grey4'>Welcome To YearBook</h>
            <h className='text-sm text-grey4'>Sign up here.</h>
            <div className="flex">
                <InputField/>
                <InputField/>
            </div>
        </div>
    );
}

export default Signup;
