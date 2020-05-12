import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar.js'
import Signup from "./components/Signup";

function Root() {
    return (
        <div className='w-full h-full'>
            <Navbar/>
            <Signup/>
        </div>
    );
}

if (document.getElementById('root')) {
    ReactDOM.render(<Root/>, document.getElementById('root'));
}

