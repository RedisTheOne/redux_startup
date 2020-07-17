import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../redux/actions/postsActions';

function PostsForm(props) {
    const formSubmited = (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const body = document.getElementById('body').value;

        if(/\S/.test(title) && /\S/.test(body)) {
            //CREATE POST ACTION
            props.createPost({
                title,
                body
            });

            //CLEAR TEXT INPUTS
            document.getElementById('title').value = '';
            document.getElementById('body').value = '';
        } else
            alert('Please fill required fields');
    }

    return (
        <div className="container">
            <h1>Add post</h1>
            <form onSubmit={formSubmited}>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input className="form-control" id="title" name="title" />
                </div>
                <div className="form-group">
                    <label htmlFor="body">Body: </label>
                    <textarea className="form-control" id="body" name="body"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
            <hr />
        </div>
    );
}

export default connect(null, {createPost})(PostsForm);