import React , {Component} from 'react';
import API from '../utils/API';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component : component, ...rest}) => (
    <Route {...rest} render={(props) => {
        var path = props.location.pathname;
        if(API.isAuth() === false){
            return (<Redirect to='/'/>)
        }
        else {
            return( <Component {...props} /> )
        }
    }} />
)