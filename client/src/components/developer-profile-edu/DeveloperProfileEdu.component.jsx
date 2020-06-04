import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const DeveloperProfileEdu = ({ education: { current, degree, description, fieldofstudy, from, to, school }}) => {
    return (
        <div className="bg-white p-2">
          <div>
            <h3 className="text-info">{school}</h3>
            <Moment format="YYYY/MM/DD">{from}</Moment> - {!to ? 'Now ' : <Moment format="YYYY/MM/DD">{to}</Moment>}
            <p><strong>Degree: </strong>{degree}</p>
            { fieldofstudy && 
                <p>
                    <strong>Field Of Study: </strong>{fieldofstudy}
                </p>
            }
            { description && 
                <p>
                    <strong>Description: </strong>{description}
                </p>                
            }
          </div>
        </div>
    )
}

DeveloperProfileEdu.propTypes = {
    education: PropTypes.object.isRequired,
}

export default DeveloperProfileEdu;
