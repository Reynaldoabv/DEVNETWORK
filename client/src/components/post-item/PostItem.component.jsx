import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { addLike, removeLike, deletePost } from '../../redux/actions/post';

const PostItem = ({ addLike, removeLike, deletePost, auth, post: { _id, text, name, avatar, user, likes, comments, date }, showActions }) => {

    return (
        <div className="row border border-info mb-3">
            <div className="col-3 bg-white text-center p-3">
              <Link to={`profile/${user}`} style={{ textDecoration: 'none'}}>
                <img
                  style={{ 'height': '120px', 'width': '120px'}}
                  className="rounded-circle img-fluid"
                  src={avatar}
                  alt="avatar"
                />
                <h4 className="text-info card-title">{name}</h4>
              </Link>
              <p className="post-date">
                  Posted on <Moment format="YYYY-MM-DD">{date}</Moment>
              </p>
            </div>
            <div className="col-9">
              <p className="mt-5 text-center">
                {text}
              </p>             
              { showActions && 
                <div className="text-center">
                  <button type="button" className="btn btn-light mr-3" onClick={e => addLike(_id)} >
                    <span role='img' alt='thumbUp'>&#128077;</span>{' '}
                    { likes.length > 0 && (
                      <span>{likes.length}</span>
                    )}             
                  </button>

                  <button type="button" className="btn btn-light mr-3" onClick={e => removeLike(_id)} >
                      <span role='img' alt='thumbDown'>&#128078;</span>
                  </button>

                  <Link to={`/posts/${_id}`} className="btn btn-info mr-3">
                    Discussion { comments.length > 0 && (
                      <span className='comment-count'>{comments.length}</span>
                    )}              
                  </Link>
                  { !auth.loading && user === auth.user._id && (

                      <button      
                          type="button"
                          className="btn btn-danger"
                          onClick={e => deletePost(_id)}
                      >
                          X
                      </button>
                  )}
                </div> 
              }                   
            </div>
      </div>
    )
}

PostItem.defaultProps = {
  showActions: true
}

PostItem.propTypes = {
    auth: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    removeLike: PropTypes.func.isRequired,
    addLike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { removeLike, addLike, deletePost })(PostItem);
