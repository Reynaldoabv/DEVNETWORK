import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import DeveloperItem from '../../components/developer-item/DeveloperItem.component';
import Spinner from '../../components/spinner/Spinner.component';
// Redux
import { connect } from 'react-redux';
import { getProfiles } from '../../redux/actions/profile.js';
// Image
import Connection from './developer-connection.png';

const DevelopersPage = ({ getProfiles, profile: { profiles, loading } }) => {

    useEffect(() => {
        getProfiles();
    }, [getProfiles]);

    return (
        <div className="developers-page container mt-5">            
            { loading ?
                <Spinner /> :
                <Fragment>
                    <h2 className="text-info">Developers</h2>
                    <div className="d-flex">
                        <img src={Connection} alt="logo-connection" style={{height: '20px', width: '20px', marginRight: '10px'}} />
                        <p> {' '} Browse and connect with developers</p>
                    </div>
                    {
                        profiles.length > 0 ? (
                            profiles.map(profile => (
                                <DeveloperItem key={profile._id} profile={profile} />
                            ))
                        ) : <Spinner />
                    }
                </Fragment>
            }
        </div>
    )
}

DevelopersPage.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps, { getProfiles })(DevelopersPage);
