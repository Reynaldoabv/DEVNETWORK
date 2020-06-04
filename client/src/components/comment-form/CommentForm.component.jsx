import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../redux/actions/post';

const CommentForm = ({ addComment, postId }) => {

    const [text, setText ] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        addComment( postId , { text });
        setText('');
    }

    return (
        <div className="mb-5 container">
            <div className="bg-info">
                <h3 className="text-white font-weight-bold pl-3">Leave a Comment</h3>
            </div>
            <form className="form my-1 row" onSubmit={onSubmit}>
                <textarea
                    name="text"
                    className="col-12"
                    rows="5"
                    placeholder="Add a comment"
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

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired
}

export default connect(null, { addComment })(CommentForm);
