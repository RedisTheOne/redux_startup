import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, clearPostData } from '../redux/actions/postsActions';

function Posts(props) {
    useEffect(() => {
        if(props.posts.length === 0)
            props.fetchPosts();
    }, [props]);

    const [postsToShow, setPostsToShow] = useState([]);

    useEffect(() => {
        setPostsToShow(props.posts);
    }, [props.posts]);

    useEffect(() => {
        if(props.post.title.length !== 0) {
            const newPostsToShow = [];
            postsToShow.forEach(p => newPostsToShow.push(p));
            newPostsToShow.unshift(props.post);
            setPostsToShow(newPostsToShow);
            props.clearPostData();
        }
    }, [props, postsToShow]);

    if(props.initialFetchIsDone)
        return (
            <div className="container">
                <h1>Posts | {postsToShow.length}</h1>
                {postsToShow.map((p, i) => (
                    <div className="jumbotron" key={i}>
                        <h1>{p.title}</h1>
                        <p>{p.body}</p>
                    </div>
                ))}
            </div>
        );
    else 
        return (
            <div className="container">  
                <h1>Loading...</h1>
            </div>
        );
}

const mapStateToProps = state => ({
    posts: state.posts.posts,
    post: state.posts.post,
    initialFetchIsDone: state.posts.initialFetchIsDone
});

export default connect(mapStateToProps, {fetchPosts, clearPostData})(Posts);