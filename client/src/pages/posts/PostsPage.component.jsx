import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import PostItem from '../../components/post-item/PostItem.component';
import Spinner from '../../components/spinner/Spinner.component';
import PostForm from '../../components/post-form/PostForm.component';
import { getPosts } from '../../redux/actions/post';
import { connect } from 'react-redux';
// Image
import User from './profile.png';

const PostsPage = ({ getPosts, post: { loading, post } }) => {

    useEffect(() => {
        getPosts();
    }, [getPosts])

    return loading ? <Spinner /> : 
        <div className="container mt-5">
            <h2 className="large text-info">Posts</h2>
            <p className="lead">
                <img src={User} alt="logo-profile" style={{height: '20px', width: '20px'}} />
                {' '}Welcome to the community
            </p>
            <PostForm />
            { post && post.map(post => (
                <PostItem key={post._id} post={post} />
            ))}
        </div>
}

PostsPage.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, { getPosts })(PostsPage);
