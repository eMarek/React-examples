import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Blog from './components/Blog.js';
import PostsIndex from './components/PostsIndex.js';
import PostsNew from './components/PostsNew.js';
import PostsShow from './components/PostsShow.js';

export default (
    <Route path="/" component={Blog}>
        <IndexRoute component={PostsIndex} />
        <Route path="posts/new" component={PostsNew} />
        <Route path="posts/:id" component={PostsShow} />
    </Route>
);
// this.props.params.id