import React from 'react';
import { Link } from 'react-router-dom';
//Images
import Profile from './profile.png';
import Experience from './experience.png';
import Education from './education.png';

const DashboardActions = props => {
    return (
        <div className="dashboard-actions">
            <Link 
                to="/edit-profile" 
                className="btn btn-light"><img src={Profile} alt="logo-profile" style={{height: '20px', width: '20px' }} /> 
                    {' '} Edit Profile
            </Link>
            <Link 
                to="/add-experience" 
                className="btn btn-light"><img src={Experience} alt="logo-experience" style={{height: '20px', width: '20px'}} />  
                {' '} Add Experience
            </Link>
            <Link 
                to="/add-education" 
                className="btn btn-light"><img src={Education} alt="logo-education" style={{height: '20px', width: '20px'}} /> 
                {' '} Add Education
            </Link>
      </div>
    )
}

export default DashboardActions;

