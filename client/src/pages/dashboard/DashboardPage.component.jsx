import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteAccount } from '../../redux/actions/profile';
import { getCurrentProfile } from '../../redux/actions/profile';
import Spinner from '../../components/spinner/Spinner.component';
import DashboardActions from '../../components/dashboard-actions/DashboardActions.component';
import DashboardExp from '../../components/dashboard-experience/DashboardExp.component';
import DashboardEdu from '../../components/dashboard-education/DashboardEdu.component';

const DashboardPage = ({ deleteAccount, getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {

    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    return loading && profile === null ? <Spinner /> : 
        <div className="dashboard container mt-5">
            <h2 className="large text-info font-weight-bold">Dashboard</h2>
            <p className="lead">
                Welcome { user && user.name }
            </p>
            { profile !== null ? 
                (<Fragment>
                    <DashboardActions />
                    <DashboardExp experience={profile.experience} />
                    <DashboardEdu education={profile.education} />
                    <button className="btn btn-danger mt-3" onClick={() => deleteAccount()}>
                        Delete your Account
                    </button>
                </Fragment>) : 
                (<div>
                    <p>You have not yet setup a profile, please add some info</p>
                    <Link to='/create-profile' className="btn btn-info my-1">Create Profile</Link>
                </div>) }
        </div>
    
}

DashboardPage.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(DashboardPage);
