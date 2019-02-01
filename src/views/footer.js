import React, {Component} from 'react';
import '../App.css';

export default class Footer extends React.Component {
    render(){
        return(
            <div className="container-fluid border-top footer d-flex justify-content-center align-items-center">
                <div className="col-sm-7 offset-sm-3 col-md-5 offset-md-3 col-10 offset-1">
                    <footer className="text-footer">GabrielaThomas</footer>
                    <a href="https://github.com/GabrielaTh"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/gabriela-thomas-910728170/"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
        )
    }
}