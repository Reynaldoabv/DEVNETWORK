import React, { Fragment } from 'react';
import './navbar.scss'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../redux/actions/auth';



const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <ul className="navbar">
            <li className="nav-item nav-link developers"><Link to='/posts' className="text-white links">Posts</Link></li>
            <li className="nav-item nav-link developers"><Link to='/profiles' className="text-white links">Developers</Link></li>
            <li className="nav-item nav-link dashboard"><Link to='/dashboard' className="text-white links">
            Dashboard</Link></li>
            <li className="nav-item nav-link"><Link to='/' className="text-white links" onClick={logout}> Logout <span className="text-info h2">&#10158;</span> </Link></li>
        </ul>
    );

    const guestLinks = (
        <ul className="navbar">
            <li className="nav-item nav-link"><Link to='/profiles' className="text-white links">Developers</Link></li>
            <li className="nav-item nav-link"><Link to='/register' className="text-white links">Register</Link></li>
            <li className="nav-item nav-link"><Link to='/login' className="text-white links">Login</Link></li>
        </ul>
    );

    return (
        <nav className="navbar bg-dark ">
            <h1 className="text-white navbar-brand font-weight-bold">
                <Link to='/' className="text-white ml-5 links"><span className="text-info">&#60;&#47;&#62;</span> DevNetwork</Link>
            </h1>
            { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>)}            
        </nav>
    )
}

Navbar.protoTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar);
