import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addEducation } from '../../../redux/actions/profile';
// Image
import codeBranch from './codeBranch.png';

const AddEducation = ({ history, addEducation }) => {

    const [formData, setFormData ] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: "",
        to: "",
        current: false,
        description: ""
    });

    const [ dateDisabled, setDateDisabled ] = useState(false);

    const { school, degree, fieldofstudy, from, to, current, description } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = e => {
        e.preventDefault();
        addEducation(formData, history);
    }

    return (
        <div className="add-education container">
            <div className="row">
                <div className="col-10 mx-auto">
                    <h1 className="large text-info text-center m-5">
                        Add Your Education
                    </h1>
                    <p className="lead">
                        <img src={codeBranch} alt="codeBranch-logo" style={{height: '20px', width: '40px'}} /> Add any School or Bootcamp 
                        you have attended.
                    </p>
                    <small className='text-danger'>* = required field</small>
                    <form className="form" onSubmit={onSubmit} >
                        <div className="form-group">
                            <input type="text" placeholder="* School or Bootcamp" required name="school" value={school} onChange={ e => onChange(e)} className='w-100' />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="* Degree or Certificate" required name="degree" value={degree} onChange={ e => onChange(e)} className='w-100'/>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="* Field of study" name="fieldofstudy" value={fieldofstudy} onChange={ e => onChange(e)} className='w-100'/>
                        </div>
                        <div className="form-group">
                            <h4>From Date</h4>
                            <input type="date" name="from" value={from} onChange={ e => onChange(e)}className='w-100'/>
                        </div>
                        <div className="form-group">
                            <p><input type="checkbox" name="current" value="" checked={current} value={current} onChange={ e => {
                                setFormData({ ...formData, current: !current });
                                setDateDisabled(!dateDisabled);
                            }}/> {' '}Current Studying</p>
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
                            placeholder="Program Description"
                            value={description} 
                            onChange={ e => onChange(e)}
                            className='w-100'
                        ></textarea>
                        </div>
                        <input type="submit" className="btn btn-info font-weight-bold my-1 mr-5" />
                        <Link className="btn btn-light my-1 font-weight-bold border-info text-info" to="/dashboard">Go Back</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

AddEducation.propTypes = {
    AddEducation: PropTypes.func.isRequired,
}

export default connect(null, { addEducation })(AddEducation);
