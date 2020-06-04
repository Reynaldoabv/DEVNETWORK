import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../redux/actions/post';

const PostForm = ({ addPost }) => {

    const [text, setText ] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        addPost({ text });
        setText('');
    }

    return (
        <div className="mb-5 container">
            <div className="bg-info text-center">
                <h3 className="text-white">Create a post</h3>
            </div>
            <form className="form my-1 row" onSubmit={onSubmit}>
                <textarea
                    name="text"
                    className="col-12"
                    rows="5"
                    placeholder="Create a post"
                    required
                    value={text}
                    onChange={e => setText(e.target.value)}
                ></textarea>
                <div className="col">
                    <input type="submit" className="btn btn-dark my-1" value="Submit" />
                </div>
            </form>
      </div>
    )
}

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired
}

export default connect(null, { addPost })(PostForm);
