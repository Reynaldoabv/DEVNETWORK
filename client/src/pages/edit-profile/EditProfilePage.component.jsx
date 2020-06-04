import React, { useState, Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../redux/actions/profile';
import { Link, withRouter } from 'react-router-dom';
import Profile from './profile.png';
//Images
import Twitter from './twitter.png';
import Facebook from './facebook.png';
import Youtube from './youtube.png';
import Linkedin from './linkedin.png';
import Instagram from './Instagram.png';

const EditProfilePage = ({ createProfile, history, getCurrentProfile, profile: { profile, loading } }) => {

    const [formData, setFormData ] = useState({
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: ''
    })

    const [socialMediaInputs, setSocialMediaInputs] = useState(false);

    useEffect(() => {
        getCurrentProfile();

        setFormData({
            company: loading || !profile.company ? '' : profile.company,
            website: loading || !profile.website ? '' : profile.website,
            location: loading || !profile.location ? '' : profile.location,
            status: loading || !profile.status ? '' : profile.status,
            skills: loading || !profile.skills ? '' : profile.skills,
            githubusername: 
                loading || !profile.githubusername ? '' : profile.githubusername,
            bio: loading || !profile.bio ? '' : profile.bio,
            twitter: loading || !profile.social ? '' : profile.social.twitter,
            facebook: loading || !profile.social ? '' : profile.social.facebook,
            linkedin: loading || !profile.social ? '' : profile.social.linkedin,
            youtube: loading || !profile.social ? '' : profile.social.youtube,
            instagram: loading || !profile.social ? '' : profile.social.instagram
        })
    }, [loading, getCurrentProfile])

    const { company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram } = formData; 

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();

        createProfile(formData, history, true);
    }

    return (
        <div className="edit-profile container mt-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <h1 className="large text-info">
                        Edit Your Profile
                    </h1>
                    <p className="lead">
                    <img src={Profile} alt="logo-profile" style={{height: '20px', width: '20px'}} /> Let's get some information to make your
                        profile stand out
                    </p>
                    <small><span className="text-danger font-weight-bold">*</span> = Required field</small>
                    <form className="form" onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                            <select name="status" value={status} onChange={e => onChange(e)} >
                                <option value="0">* Select Professional Status</option>
                                <option value="Developer">Developer</option>
                                <option value="Junior Developer">Junior Developer</option>
                                <option value="Senior Developer">Senior Developer</option>
                                <option value="Manager">Manager</option>
                                <option value="Student or Learning">Student or Learning</option>
                                <option value="Instructor">Instructor or Teacher</option>
                                <option value="Intern">Intern</option>
                                <option value="Other">Other</option>
                            </select>
                            <small className="form-text">Give us an idea of where you are at in your career</small>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Company" name="company" className="w-100" value={company} onChange={e => onChange(e)} />
                            <small className="form-text">Could be your own company or one you work for</small>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Website" name="website" className="w-100" value={website} onChange={e => onChange(e)}/>
                            <small className="form-text">Could be your own or a company website</small>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Location" name="location" className="w-100" value={location} onChange={e => onChange(e)}/>
                            <small className="form-text">City & state suggested (eg. Boston, MA)</small>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="* Skills" name="skills" className="w-100" value={skills} onChange={e => onChange(e)}/>
                            <small className="form-text">Please use comma separated values (eg.
                            HTML,CSS,JavaScript,PHP)</small>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Github Username"
                                name="githubusername" className="w-100" value={githubusername} onChange={e => onChange(e)}/>
                            <small className="form-text">If you want your latest repos and a Github link, include your username</small>
                        </div>
                        <div className="form-group">
                            <textarea placeholder="A short bio of yourself" name="bio" className="w-100" value={bio} onChange={e => onChange(e)}></textarea>
                            <small className="form-text">Tell us a little about yourself</small>
                        </div>
                        <div className="my-2">
                            <button onClick={() => setSocialMediaInputs(!socialMediaInputs)} type="button" className="btn btn-light text-info font-weight-bold border-info">
                                Add Social Network Links
                            </button>
                            <span> Optional</span>
                        </div>

                        { socialMediaInputs ? 
                        <Fragment>
                            <div className="form-group social-input">
                                <img className="mr-3" src={Twitter} alt="logo-twitter" style={{ height: '30px', width: '30px'}}/>
                                <input type="text" placeholder="Twitter URL" name="twitter" value={twitter} onChange={e => onChange(e)}/>
                            </div>

                            <div className="form-group social-input">
                                <img className="mr-3" src={Facebook} alt="logo-facebook" style={{ height: '30px', width: '30px'}}/>
                                <input type="text" placeholder="Facebook URL" name="facebook" value={facebook} onChange={e => onChange(e)}/>
                            </div>

                            <div className="form-group social-input">
                                <img className="mr-3" src={Youtube} alt="logo-youtube" style={{ height: '30px', width: '30px'}}/>
                                <input type="text" placeholder="YouTube URL" name="youtube" value={youtube} onChange={e => onChange(e)}/>
                            </div>

                            <div className="form-group social-input">
                                <img className="mr-3" src={Linkedin} alt="logo-linkedin" style={{ height: '30px', width: '30px'}}/>
                                <input type="text" placeholder="Linkedin URL" name="linkedin" value={linkedin} onChange={e => onChange(e)}/>
                            </div>

                            <div className="form-group social-input">
                                <img className="mr-3" src={Instagram} alt="logo-instagram" style={{ height: '30px', width: '30px'}}/>
                                <input type="text" placeholder="Instagram URL" name="instagram" value={instagram} onChange={e => onChange(e)}/>
                            </div>
                        </Fragment> : 
                        null }

                            <input type="submit" className="btn btn-info my-1 mr-5 mt-3" />
                            <Link className="btn btn-light border-info my-1 text-info mt-3" to='/dashboard'>Go Back</Link>                            
                    </form>
                </div>
            </div>
            
        </div>
    )
}

EditProfilePage.propTypes = {
    createProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    getCurrentProfile: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(EditProfilePage));
