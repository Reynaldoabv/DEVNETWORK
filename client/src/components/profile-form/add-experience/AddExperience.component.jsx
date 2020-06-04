import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addExperience } from '../../../redux/actions/profile';
// Image
import codeBranch from './codeBranch.png';

const AddExperience = ({ history, addExperience }) => {

    const [formData, setFormData ] = useState({
        company: "",
        title: "",
        location: "",
        from: "",
        to: "",
        current: false,
        description: ""
    });

    const [ dateDisabled, setDateDisabled ] = useState(false);

    const { company, title, location, from, to, current, description } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = e => {
        e.preventDefault();
        addExperience(formData, history);
    }

    return (
        <div className="add-experience container">
            <div className="row">
                <div className="col-10 mx-auto">
                    <h1 className="large text-info m-5 text-center">
                        Add an Experience
                    </h1>
                    <p className="lead">
                        <img src={codeBranch} alt="codeBranch-logo" style={{height: '20px', width: '40px'}} /> Add any developer/programming
                        positions that you have had in the past
                    </p>
                    <small className='text-danger'>* = required field</small>
                    <form className="form" onSubmit={onSubmit} >
                        <div className="form-group">
                            <input type="text" placeholder="* Job Title" name="title" required value={title} onChange={ e => onChange(e)} className='w-100' />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="* Company" name="company" required value={company} onChange={ e => onChange(e)}className='w-100'/>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Location" name="location" value={location} onChange={ e => onChange(e)}className='w-100'/>
                        </div>
                        <div className="form-group">
                            <h4>From Date</h4>
                            <input type="date" name="from" value={from} onChange={ e => onChange(e)}className='w-100'/>
                        </div>
                        <div className="form-group">
                            <p><input type="checkbox" name="current" value="" checked={current} value={current} onChange={ e => {
                                setFormData({ ...formData, current: !current });
                                setDateDisabled(!dateDisabled);
                            }}/> {' '}Current Job</p>
                        </div>
                        <div className="form-group">
                            <h4>To Date</h4>
                            <input type="date" name="to" value={to} onChange={ e => onChange(e)} disabled={dateDisabled ? 'disabled' : '' } className='w-100'/>
                        </div>
                        <div className="form-group">
                        <textarea
                            name="description"
                            cols="30"
                            rows="5"
                            placeholder="Job Description"
                            value={description} 
                            onChange={ e => onChange(e)}
                            className='w-100'
                        ></textarea>
                        </div>
                        <input type="submit" className="btn btn-info my-1 mr-5 font-weight-bold" />
                        <Link className="btn btn-light my-1 border-info text-info font-weight-bold" to="/dashboard">Go Back</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

AddExperience.propTypes = {
    AddExperience: PropTypes.func.isRequired,
}

export default connect(null, { addExperience })(AddExperience);
