import React, {Component} from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import '../views-css/login.css';
import API from '../utils/API';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password: "",
            cpassword: ""
        }
        this.handleChange.bind(this);
        this.send.bind(this);
    }
    send = event => {
        if(this.state.email.length === 0){
            return;
        }
        if(this.state.password.length === 0 || this.state.password !== this.state.cpassword){
            return;
        }
        var _send = {
            email: this.state.email,
            password: this.state.password
        }
        API.signup(_send).then(function(data){
            localStorage.setItem('token', data.data.token);
            window.location = "/dashboard"
        },function(error){
            console.log(error);
            return;
        })
    }    
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {
        return(
        <div className="container">
            <h1 className="col-sm-7 offset-sm-3 col-md-5 offset-md-3 col-10 offset-1 mt-5">Join us!</h1>
            <div className="card col-sm-7 offset-sm-3 col-md-5 offset-md-3 col-10 offset-1 rounded border-warning">
                    <h3 className="text-center text-login">Sign-Up</h3>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel className="card-text">Email</ControlLabel>
                        <FormControl className="card-input" autoFocus type="email" value={this.state.email} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel className="card-text">Password</ControlLabel>
                        <FormControl className="card-input" value={this.state.password} onChange={this.handleChange} type="password"/>
                    </FormGroup>
                    <FormGroup controlId="cpassword" bsSize="large">
                        <ControlLabel className="card-text">Confirm Password</ControlLabel>
                        <FormControl className="card-input" value={this.state.cpassword} onChange={this.handleChange} type="password"/>
                    </FormGroup>
                    <Button
                    onClick={this.send}
                    className="buttom-login"
                    type="submit">
                    Inscription
                    </Button>
            </div>
        </div>
        )
    }
}
