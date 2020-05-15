import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar'
import SignUp from "./components/SignUp";
import Landing from "./components/Landing";
import SignIn from "./components/SignIn";
import VerifyEmail from "./components/VerifyEmail";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Home from './components/Home';

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
                    <Route path='/register'>
                        <SignUp/>
                    </Route>
                    <Route path="/login">
                        <SignIn />
                    </Route>
                    <Route path="/email/verify">
                        <VerifyEmail/>
                    </Route>
                    <Route path="/password/reset/:token">
                        <ResetPassword/>
                    </Route>
                    <Route path="/password/reset">
                        <ForgotPassword/>
                    </Route>
                    <Route path="/home">
                        <Home />
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

