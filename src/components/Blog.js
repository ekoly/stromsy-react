import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import BlogPost from './BlogPost';
import BlogAPI from '../api';
import VikingsAtStraumseyPng from '../img/vikings_at_straumsey_banner-9.png';

class Blog extends Component {
    render() {
        return (
            <section>
                <section id="top-banner-picture">
                    <Link to="/"><img title="Lief Eriksson discovers Straumsey" alt="Lief Eriksson discovers Straumsey" src={VikingsAtStraumseyPng} /></Link>
                </section>
                <section id="content">
                    <Switch>
                        <Route exact path="/" component={BlogPostList} />
                        <Route exact path="/blog" component={BlogPostList} />
                        <Route path="/blog/page/:page_id" component={BlogPostList} />
                        <Route path="/blog/post/:post_id" component={SingleBlogPost} />
                    </Switch>
                </section>
                <section id="more-button"></section>
            </section>
        );
    }
}

const BlogPostList = (props) => {
    const page_id = parseInt(props.match.params.page_id, 10);
    return (
        BlogAPI.all().map(p=>(
            <BlogPost post_id={p.post_id} />
        ))
    );
};

const SingleBlogPost = (props) => {
    const post_id = parseInt(props.match.params.post_id, 10);
    return (
        <BlogPost post_id={post_id} />
    );
}


export default Blog
