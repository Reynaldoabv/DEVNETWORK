import React from 'react';
import './home-page.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import Background from './showcase.jpg';

import { Link, Redirect } from 'react-router-dom';

const showcase = {
    width: "100%",
    height: "100vh",
    backgroundImage: "url(" + { Background } + ")"
}

const HomePage = ({ isAuthenticated }) => {

    if(isAuthenticated){
        return <Redirect to='/dashboard' />
    }

    return (
        <div className="homepage" style={ showcase } >
            <div className="title text-center text-white title font-weight-bold">
                <h1>Developer Network</h1>
            </div>
            <h4 className="text-center text-white mt-5 font-weight-bold">Create Developer profile/portfolio, share posts and get help from other developers</h4>
            <div className="text-center">
                <Link to='/register'><button className="btn btn-info text-white mt-5 mr-3">Sign Up</button></Link>
                <Link to='/login'><button className="btn btn-light text-info mt-5">Login</button></Link>
            </div>
        </div>
    )
}

HomePage.propTypes = {
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(HomePage);