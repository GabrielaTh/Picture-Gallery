import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {PrivateRoute} from './views/privateRoute.js';
import Dashboard from './views/Dashboard'
import NavBarLogin from './views/navbar';
import Signup from './views/signup.js';
import Login from './views/login.js';
import Footer from './views/footer';
import './App.css';

class App extends Component {
        render() {
        return (
            <>
                <NavBarLogin/>
                <Footer/>
                <Switch>  
                    <Route exact path="/" component={Login}/>
                    <Route exact path ="/signup" component={Signup}/>
                    <PrivateRoute path='/dashboard' component={Dashboard} />
                </Switch>
            </>
        );
    }
}
export default App;
