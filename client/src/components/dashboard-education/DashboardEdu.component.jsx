import React from 'react';
import PropTypes from 'prop-types';
// Redux 
import { connect } from 'react-redux';
import { deleteEducation } from '../../redux/actions/profile.js';

import Moment from 'react-moment';

const DashboardEdu = ({ education, deleteEducation }) => {

    const skills = education.map(edu => (
        <tr key={edu._id}>
            <td>{edu.school}</td>
            <td>{edu.degree}</td>
            <td>
                <Moment format='YYYY/MM/DD'>{edu.from}</Moment> -{' '} {
                    edu.to === null ? (' Now') : (<Moment format='YYYY/MM/DD'>{edu.to}</Moment>)
                }
            </td>
            <td>
                <button className="btn btn-danger" onClick={() => deleteEducation(edu._id)}>Delete</button>
            </td>
        </tr>
    ))

    return (
        <div className="dashboard-exp">
            <h2 className="mt-5 font-weight-bold">Education Credentials</h2>
            <table className="table mt-3 table-bordered table-striped">
                <thead>
                    <tr className="text-info">
                        <th>School</th>
                        <th>Degree or Certificate</th>
                        <th>Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {skills}
                </tbody>
            </table>
        </div>
    )
}

DashboardEdu.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired,
}

export default connect(null, {deleteEducation})(DashboardEdu);
