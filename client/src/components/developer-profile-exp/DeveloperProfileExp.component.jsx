import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const DeveloperProfileExp = ({ experience: { company, title, to, from, description, location, current }}) => {
    return (
        <div>
            <h3 className="text-info ">{company}</h3>
            <Moment format='YYYY/MM/DD'>{from}</Moment> - {!to ? 'Now ' : <Moment format="YYYY/MM/DD">{to}</Moment>}
            { title && 
                <p>
                    <strong>Position: </strong>{title}
                </p>
            }
            { description && 
                <p>
                    <strong>Description: </strong>{description}
                </p>
            }
        </div>
    )
}

DeveloperProfileExp.propTypes = {
    experience: PropTypes.object.isRequired,
}

export default DeveloperProfileExp;
