import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar'
import SignUp from "./components/SignUp";
import Landing from "./components/Landing";
import SignIn from "./components/SignIn";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function Root() {
    return (
        <Router>
            <div className='w-full h-screen bg-grey1 flex flex-col items-center'>
                <Navbar/>
                <Switch>
                    <Route path='/signup'>
                        <SignUp/>
                    </Route>
                    <Route path="/signin">
                        <SignIn />
                    </Route>
                    <Route path="/">
                        <Landing/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

if (document.getElementById('root')) {
    ReactDOM.render(<Root/>, document.getElementById('root'));
}

