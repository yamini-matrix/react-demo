import React from "react";
import { Link} from 'react-router-dom';
function TopNav() {
    return (
        <nav className="navbar navbar-dark bg-dark justify-content-between">
            <a className="navbar-brand">Home</a>
            <Link to="/Login">Login</Link>
            <Link to="/Register">Signup</Link>
        </nav>
    );
}

export default TopNav;