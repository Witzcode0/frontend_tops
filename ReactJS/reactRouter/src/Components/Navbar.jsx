import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css'
const Navbar = () => {
    return(
        <div>
            <nav>
                <ul>
                    <li><NavLink to="/" ClassName="active">Home</NavLink></li>
                    <li><NavLink to="/services" ClassName="active">Services</NavLink></li>
                    <li><NavLink to="/blogs" ClassName="active">Blogs</NavLink></li>
                    <li><NavLink to="/about" ClassName="active">About</NavLink></li>
                    <li><NavLink to="/contact" ClassName="active">Contact</NavLink></li>
                    <li><NavLink to="/profile" ClassName="active">Profile</NavLink></li>
                </ul>
            </nav>
            <h1>My React App</h1>
        </div>
    )
}

export default Navbar;