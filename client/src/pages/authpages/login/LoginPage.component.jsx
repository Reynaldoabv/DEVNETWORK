import React, { useState } from 'react';
import './login-page.scss';

// import axios from 'axios';

import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../../redux/actions/auth';


const LoginPage = ({ login, isAuthenticated }) => {

    const [ formData, setFormData ] = useState({
        email: "",
        password: ""
    });

    const { email, password } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    }

    const onSubmit = async e => {
        e.preventDefault();

            // HOW TO DO IT WITHOUT REDUX
            
            // const newUser = {
            //     name, 
            //     email, 
            //     password
            // }

            // try {
            //     const config = {
            //         headers: {
            //             'Content-Type': 'application/json'
            //         }
            //     }

            //     const body = JSON.stringify(newUser);

            //     const res = await axios.post('/api/users', body, config)

            //     console.log(res.data);

            // } catch (err) {
            //     console.log(err.response.data)
            // }

            login(email, password);
    }

    // Redirect if logged
    if(isAuthenticated) {
        return <Redirect to='/dashboard' />
    }

    return (
        <div className="register-page container mt-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <h1 className="large text-info">Sign In</h1>                        
                    <p className="lead">
                    {/* <span className="icon">&#128100; </span> */}
                    Sign into your account
                    </p>
                </div>                
            </div>

            <div className="row">
                <div className="col-10 mx-auto">
                    <form className="form" onSubmit={onSubmit}>
                        <div className="form-group">
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Email Address" 
                                className="w-75" 
                                required
                                value={email}
                                onChange={e => onChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Password" 
                                minLength="6" 
                                className="w-75"
                                value={password}
                                onChange={e => onChange(e)}
                            />
                        </div>
                        <input 
                            type="submit" 
                            className="btn btn-info" 
                            value="Login" 
                        />
                    </form>
                    <p className="my-1">
                        Don't have an account? <Link to='/register' className="text-info link font-weight-bold">Sign In</Link>
                    </p>
                </div>               
            </div>              
        </div>
    )
}

LoginPage.protoTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(LoginPage);
