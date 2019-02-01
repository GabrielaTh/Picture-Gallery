import React, {Component} from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import '../views-css/login.css';
import API from '../utils/API';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password: ""
        }
        this.handleChange.bind(this);
        this.send.bind(this);
    }
    send = event => {
        if(this.state.email.length === 0){
            return;
        }
        if(this.state.password.length === 0){
            return;
        }
        API.login(this.state.email, this.state.password).then(function(data){
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
            <h1 className="col-sm-7 offset-sm-3 col-md-5 offset-md-3 col-10 offset-1 mt-5">Welcome!</h1>
            <div className="card col-sm-7 offset-sm-3 col-md-5 offset-md-3 col-10 offset-1 rounded border-warning">
                <h3 className="text-center text-login">Login</h3>
                <FormGroup controlId="email" bsSize="large">
                    <ControlLabel className="card-text">Email</ControlLabel>
                    <FormControl className="card-input" autoFocus type="email" value={this.state.email} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <ControlLabel className="card-text">Password</ControlLabel>
                    <FormControl className="card-input" value={this.state.password} onChange={this.handleChange} type="password"/>
                </FormGroup>
                <Button
                onClick={this.send}
                type="submit"
                className="buttom-login"
                >
                Connection
                </Button>
            </div>
        </div>
        )
    }
}

export default Login;
