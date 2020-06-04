import React, { useState } from 'react';
import { connect } from 'react-redux';
import './register-page.scss';

import { setAlert } from '../../../redux/actions/alert';
import { register } from '../../../redux/actions/auth';
import PropTypes from 'prop-types';


// import axios from 'axios';

import { Link, Redirect } from 'react-router-dom';

const RegisterPage = ({ setAlert, register, isAuthenticated }) => {

    const [ formData, setFormData ] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    }

    const onSubmit = async e => {
        e.preventDefault();

        if(password !== password2) {
            setAlert('Passwords do not match!', 'danger')
        } else {

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

            //HOW TO DO IT WITH REDUX
            register({ name, email, password });
            setFormData ({ 
                name: '', 
                email: '', 
                password: '', 
                password2: '' 
            })

        }
    }

    // Redirect if logged
    if(isAuthenticated) {
        return <Redirect to='/dashboard' />;
    }

    return (
        <div className="register-page container mt-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <h1 className="large text-info">Sign Up</h1>                        
                    <p className="lead">
                    {/* <span className="icon">&#128100; </span> */}
                    Create Your Account
                    </p>
                </div>                
            </div>

            <div className="row">
                <div className="col-10 mx-auto">
                    <form className="form" onSubmit={onSubmit}>
                        <div className="form-group">
                            <input 
                                type="text" 
                                placeholder='Name' 
                                name="name" 
                                className="w-75"
                                value={name}
                                onChange={e => onChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Email Address" 
                                className="w-75" 
                                value={email}
                                onChange={e => onChange(e)}
                            />
                            <small className="form-text">This site uses Gravatar so if you wnat a profile image, 
                                use a Gravatar email
                            </small>
                        </div>
                        <div className="form-group">
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Password" 
                                className="w-75"
                                value={password}
                                onChange={e => onChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                name="password2"
                                className="w-75"
                                value={password2}
                                onChange={e => onChange(e)}
                            />
                        </div>
                        <input 
                            type="submit" 
                            className="btn btn-info" 
                            value="Register" 
                        />
                    </form>
                    <p className="my-1">
                        Already have an account? <Link to='/login' className="text-info link font-weight-bold">Sign In</Link>
                    </p>
                </div>               
            </div>              
        </div>
    )
}

RegisterPage.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, register })(RegisterPage);
