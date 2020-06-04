import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPost } from '../../redux/actions/post';
import Spinner from '../../components/spinner/Spinner.component';
import PostItem from '../../components/post-item/PostItem.component';
import CommentForm from '../../components/comment-form/CommentForm.component';
import CommentItem from '../../components/comment-item/CommentItem.component';
import { Link } from 'react-router-dom';

const PostPage = ({ getPost, post:{ post, loading }, match }) => {

    useEffect(() => {
        getPost(match.params.id);
    }, [getPost, loading])
    
    console.log(post && 'post', post);
    return loading || post === null ? <Spinner /> : 
        <Fragment>
            <div className="container mt-5">
                <Link className="btn btn-info" to={'/posts'}>Back to Post</Link>
            </div>
            <div className="mt-3 container">
                <PostItem post={post} showActions={false} />
                <CommentForm postId={post._id} />
                {post.comments.map(comment => (
                    <CommentItem key={comment._id} postId={post._id} comment={comment} />
                ))}
            </div>
        </Fragment>
}

PostPage.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, { getPost })(PostPage);
