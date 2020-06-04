import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Website from './website.png';
import Facebook from './facebook.png';
import Twitter from './twitter.png';
import Linkedin from './linkedin.png';
import Youtube from './youtube.png';
import Instagram from './Instagram.png';

const DeveloperProfileTop = ({ profile: { status, company, website, location, social, user: { avatar, name } } }) => {
    return (
        <div className="bg-info p-3 text-center text-white">
          <img
            className="rounded-circle my-1 d-block mx-auto"
            src={avatar}
            alt="profile"
          />
          <h1 className="large ">{ name }</h1>
          <p className="lead">{status} {company && <span> at {company} </span>}</p>
          <p>{location && <span>{location}</span>}</p>
          <div className="icons my-1">
              { website && (
                <a href={website}  target="_blank" rel="noopener noreferrer">
                    <img src={Website} alt="website-icon" className="rounded-circle img-responsive mr-3" style={{ width: '30px', height: '30px'}} />
                </a>
              )}
              {  social && social.twitter && (
                <a href={social.twitter}  target="_blank" rel="noopener noreferrer">
                    <img src={Twitter} alt="facebook-icon" className="img-responsive mr-3" style={{ width: '30px', height: '30px'}}/>
                </a>
              )}
              {  social && social.facebook && (
                <a href={social.facebook}  target="_blank" rel="noopener noreferrer">
                    <img src={Facebook} alt="facebook-icon" className="img-responsive mr-3" style={{ width: '30px', height: '30px'}}/>
                </a>
              )}
              {  social && social.linkedin && (
                <a href={social.linkedin}  target="_blank" rel="noopener noreferrer">
                    <img src={Linkedin} alt="facebook-icon" className="img-responsive mr-3" style={{ width: '30px', height: '30px'}}/>
                </a>
              )}
              {  social && social.youtube && (
                <a href={social.youtube}  target="_blank" rel="noopener noreferrer">
                    <img src={Youtube} alt="facebook-icon" className="img-responsive mr-3" style={{ width: '30px', height: '30px'}}/>
                </a>
              )}
              {  social && social.instagram && (
                <a href={social.instagram}  target="_blank" rel="noopener noreferrer">
                    <img src={Instagram} alt="facebook-icon" className="img-responsive mr-3" style={{ width: '30px', height: '30px'}}/>
                </a>
              )}
          </div>
        </div>
    )
}

DeveloperProfileTop.propTypes = {
    profile: PropTypes.object.isRequired
}

export default DeveloperProfileTop;
