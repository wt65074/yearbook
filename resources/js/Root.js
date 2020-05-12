import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar.js'
import Signup from "./components/Signup";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Root() {
    return (
        <Router>
            <div className='w-full h-screen bg-grey1 flex flex-col items-center'>
                <Navbar/>
                <Switch>
                    <Route path='/signup'>
                        <Signup/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

if (document.getElementById('root')) {
    ReactDOM.render(<Root/>, document.getElementById('root'));
}

