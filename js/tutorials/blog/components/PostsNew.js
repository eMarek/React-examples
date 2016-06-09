import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/Index.js';
import { Link } from 'react-router';

class PostsNew extends Component {
    handleSubmit(e) {
        if (!this.refs.title.value) {
            alert("Title is missing!");
            return;
        }

        if (!this.refs.categories.value) {
            alert("Categories are missing!");
            return;
        }

        if (!this.refs.content.value) {
            alert("Content is missing!");
            return;
        }

        this.props.createPost({
            title: this.refs.title.value,
            categories: this.refs.categories.value,
            content: this.refs.content.value
        }).then(() => {
            // blog post has benn created, navigate user to the index
            this.context.router.push('/');
        });
    }

    render() {
        return (
            <form>
                <h3>Create a New Post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" ref="title" />
                </div>
                <div className="form-group">
                    <label>Categories</label>
                    <input type="text" className="form-control" ref="categories" />
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea className="form-control" ref="content" />
                </div>
                <a href="javascript:;" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Submit</a>&nbsp;
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

PostsNew.contextTypes = {
    router: PropTypes.object
};

export default connect(null, { createPost })(PostsNew);