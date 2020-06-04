import React from 'react';
import PropTypes from 'prop-types';

const DeveloperProfileAbout = ({ profile: {bio, skills, user: { name }}}) => {
    return (
        <div className="bg-light p-2 text-center">
            { bio && (
                    <div className="">
                        <h2 className="text-info">{name.trim().split(' ')[0]}'s Bio</h2>
                        <p>
                            {bio}
                        </p>
                    </div>
                )
            }
            { skills && ( <h2 className="text-info">Skill Set</h2> ) }
            <div className=" container">
                <div className="row">
                    <div className="col-12 d-flex">
                        { skills && skills.map((skill, i) => (              
                            <p key={i} className="mr-3 mt-3 mb-3"><span className="text-info">&#10003;</span>{skill}</p>                            
                        ))}
                    </div>
                </div>                
            </div>
        </div>
    )
}

DeveloperProfileAbout.propTypes = {
    profile: PropTypes.object.isRequired
}

export default DeveloperProfileAbout;
