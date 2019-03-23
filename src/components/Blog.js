import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import BlogPost from './BlogPost';
import VikingsAtStraumseyPng from '../img/vikings_at_straumsey_banner-9.png';


const Blog = () => {
    
    return (
        <section>
            <section id="top-banner-picture">
                <Link to="/about"><img title="Lief Eriksson discovers Straumsey" alt="Lief Eriksson discovers Straumsey" src={VikingsAtStraumseyPng} /></Link>
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

class BlogPostList extends React.Component {

    state = {
        posts: []
    };

    componentDidMount() {

        const page_id = parseInt(this.props.match.params.page_id, 10);

        fetch("http://localhost:5000/posts")
            .then((res) => {
                if (!res.ok) {
                    throw res;
                }
                return res.json();
            })
            .then((data) => {
                this.setState({ posts: data.posts });
            })
            .catch((err) => {
                this.setState({ posts: [] });
            });

    }


    render() {
        return (
            this.state.posts.map(p => (
                <BlogPost post={p} />
            ))
        );
    }

};

class SingleBlogPost extends React.Component {

    state = {
        post: null
    };

    componentDidMount() {

        const post_id = parseInt(this.props.match.params.post_id, 10);

        fetch("http://localhost:5000/posts/" + post_id)
            .then((res) => {
                if (!res.ok) {
                    throw res;
                }
                return res.json();
            })
            .then((data) => {
                this.setState({ post: data.post });
            })
            .catch((err) => {
                this.setState({ post: null });
            });

    }


    render() {
        return (
            <BlogPost post={this.state.post} />
        );
    }

};


export default Blog
