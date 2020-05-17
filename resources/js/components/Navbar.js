import React from 'react';
import axios from 'axios';
function Navbar(props) {
    const {user} = props;
    const logout = (event) => {
        axios.post('/logout', {}, {
            headers:{
                'Accept':'text/html'
            }
        })
            .then(res => {
                window.location.href = '/';
                console.log("Res: ");
                console.log(res);
            })
            .catch(err => {
                console.log("Err: ");
                console.log(err.response);
            })
    }
    const login = (event) => {
        window.location.href = '/login'
    }

    return (
        <div className="h-16 w-full shadow-navBar bg-white flex-none flex object-contain justify-center px-12">
            <img src='/images/logo.png' className='object-contain h-4 my-auto mx-auto'/>
            {user ? <button className='text-grey4' onClick={logout}>Logout</button> : <button className='text-grey4' onClick={login}>Log In</button>}
        </div>
    );
}

export default Navbar;
