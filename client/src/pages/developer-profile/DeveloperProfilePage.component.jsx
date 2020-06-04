import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProfileById } from '../../redux/actions/profile';
import Spinner from '../../components/spinner/Spinner.component';
import DeveloperProfileTop from '../../components/developer-profile-top/DeveloperProfileTop.component';
import DeveloperProfileAbout from '../../components/developer-profile-about/DeveloperProfileAbout.component';
import DeveloperProfileExp from '../../components/developer-profile-exp/DeveloperProfileExp.component';
import DeveloperProfileEdu from '../../components/developer-profile-edu/DeveloperProfileEdu.component';

const DeveloperProfilePage = ({ getProfileById, profile: { profile, loading }, auth, match }) => {

    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById, match.params.id])

    console.log("auth", auth);
    console.log("profile", profile);

    return (
        <div className="developer-profile container mt-5">
            {
                profile === null && loading ? <Spinner /> : 
                (
                    <div className="container">
                        <Link to='/profiles' className="btn btn-info text-white mr-5" >Back to Profiles</Link>
                        { auth.isAuthenticated && auth.loading === false && auth.user._id === profile.user._id && 
                            ( 
                                <Link to='/edit-profile' className="btn btn-dark">Edit Profile</Link>
                            )
                        }
                        <div className="mt-3">
                            <DeveloperProfileTop profile={profile} />
                            <DeveloperProfileAbout profile={profile} />
                            <div className="row">
                                <div className="col-6">
                                    <div className="bg-white">
                                        <h2 className="text-info font-weight-bold">Experience</h2>
                                        { profile.experience.length > 0 ? 
                                            ( profile.experience.map(experience => (
                                                <DeveloperProfileExp key={experience._id} experience={experience} />
                                            ))) : 
                                            <p>No experience credentials provided</p>
                                        }
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="bg-white">
                                        <h2 className="text-info font-weight-bold">Education</h2>
                                        { profile.education.length > 0 ? 
                                            ( profile.education.map(education => (
                                                <DeveloperProfileEdu key={education._id} education={education} />
                                            ))) : 
                                            <p>No experience credentials provided</p>
                                        }
                                    </div>
                                </div>  
                            </div>                                                        
                        </div>
                    </div>
                )
            }
        </div>
    )
}

DeveloperProfilePage.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps, { getProfileById })(DeveloperProfilePage)
