import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../views-css/login.css';



export default class NavBarLogin extends Component {
        render() {
            return(
            <>
                <nav className="navbar">
                    <a className="navbar-brand" href="/">PictureGallery</a>
                    <div className="d-flex justify-content-around">
                        <NavLink to="/" className="navbar-toggler active nav-button rounded">Login</NavLink>
                        <NavLink to="/signup" className="navbar-toggler active nav-button rounded">Sign-Up</NavLink>
                    </div>
                </nav>
            </>
        )
    }

}




