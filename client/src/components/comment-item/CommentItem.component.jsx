import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { deleteComment } from '../../redux/actions/post';

const CommentItem = ({ deleteComment, comment:{ _id, text, name, avatar, user, date }, postId, auth }) => {
    return (
        <div class="post bg-white p-1 my-1">
            <div className="row">
                <div className="col-3 card">
                    <Link to={`/profile/${user}`} style={{ textDecoration: 'none'}}>
                        <img
                            style={{ 'height': '60px', 'width': '60px' }}
                            class="rounded-circle d-block mx-auto mt-3"
                            src={avatar}
                            alt=""
                        />
                        <h4 className="text-center display-8 mt-3">{name}</h4>
                    </Link>
                </div>
                <div className="col-9">
                    <p class="mt-5">
                        {text}
                    </p>
                    <div className="d-flex">
                        <p className="mr-3">
                            Posted on <Moment format="YYYY-MM-DD">{date}</Moment>
                        </p>
                        { !auth.loading && user === auth.user._id && (
                            <Link onClick={e => deleteComment(postId, _id)} type="button" className="btn btn-danger mb-1">
                                x
                            </Link>
                        )}
                    </div>
                </div>               
            </div>
        </div>
    )
}

CommentItem.propTypes = {
    comment: PropTypes.object.isRequired,
    postId: PropTypes.number.isRequired,
    auth: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { deleteComment })(CommentItem);
