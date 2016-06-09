import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/Index.js';
import { Link } from 'react-router';

class PostsShow extends Component {
    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }

    onDeleteClick() {
        this.props.deletePost(this.props.params.id).then(() => {
            this.context.router.push('/');
        });
    }

    render() {
        const { post } = this.props;

        if (!post) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <div>
                <Link to="/">Back to index</Link>&nbsp;
                <button className="btn btn-danger" onClick={this.onDeleteClick.bind(this)}>Delete Post</button>
                <h3>{post.title}</h3>
                <h5>Categories: {post.categories}</h5>
                <p>{post.content}</p>
            </div>
        );
    }
}

PostsShow.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state) {
    return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);