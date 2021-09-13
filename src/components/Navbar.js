import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="container navbar navbar-expand-lg navbar-light bg-custom">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active">
                        <NavLink to="/ReactBlog" id="home" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/myblog" id="myblog" className="nav-link">MyBlog</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" id="about" className="nav-link">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" id="contacts" className="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
        </nav> 
    );
}

export default Navbar;
