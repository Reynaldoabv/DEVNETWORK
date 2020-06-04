import React from 'react';
import PropTypes from 'prop-types';
// Redux
import { deleteExperience } from '../../redux/actions/profile';
import { connect } from 'react-redux';
import Moment from 'react-moment';

const DashboardExp = ({ experience, deleteExperience }) => {

    const experiences = experience.map(exp => (
        <tr key={exp._id}>
            <td>{exp.company}</td>
            <td>{exp.title}</td>
            <td>
                <Moment format='YYYY/MM/DD'>{exp.from}</Moment> - {' '} {
                    exp.to === null ? (' Now') : ( <Moment format='YYYY/MM/DD'>{exp.to}</Moment> )
                }
            </td>
            <td>
                <button className="btn btn-danger" onClick={() => deleteExperience(exp._id)} >Delete</button>
            </td>
        </tr>
    ))

    return (
        <div className="dashboard-exp">
            <h2 className="mt-5 font-weight-bold">Experience Credentials</h2>
            <table className="table mt-3 table-bordered table-striped">
                <thead>
                    <tr className="text-info">
                        <th >Company</th>
                        <th>Title</th>
                        <th>Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {experiences}
                </tbody>
            </table>
        </div>
    )
}

DashboardExp.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired,
}

export default connect(null, { deleteExperience })(DashboardExp);
