import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const DeveloperItem = ({ profile: { user: { _id, name, avatar }, status, company, location, skills } }) => {
    return (
        <div className="developer-item mt-3">
            <div className="row">                    
                <div className="col-md-6 mx-auto">
                    <div className="card d-flex bg-light">
                        <div className="mx-auto mt-3">
                            <img className="rounded-circle img-fluid" src={avatar} style={{height: '100px', width: '100px'}} alt='avatar' />
                        </div>
                        <div className="text-left">
                            <div className="card-title text-center text-info mt-3">
                                <h4>{name.charAt(0).toUpperCase() + name.slice(1)}</h4>
                            </div>
                            <div className="d-flex">
                                <div className="card-body">
                                    <p className="font-weight-bold">{status} {company && <span className="font-weight-normal">at: {company}</span>}</p>
                                    <p>{location}</p>
                                </div>
                                <div className="mr-5 mt-3">
                                    <ul>
                                        {
                                            skills.slice(0,4).map((skill, index) => (
                                                <li key={index}><span className="text-info">&#10003;</span>{skill.charAt(0).toUpperCase() + skill.slice(1)}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <Link to={`/profile/${_id}`} className="btn btn-info ml-3 mb-3">
                                    View profile
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

DeveloperItem.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default DeveloperItem;
