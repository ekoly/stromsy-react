import React from 'react';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';


const BlogPost = (props) => {

    let post = props.post;

    if (!post) {
        return (
            <article class="blog-post">
                <h3>Article not found</h3>
                <blockquote>
                    <p>Perhaps one day we will have machines that can cope with approximate task descriptions, but in the meantime, we have to be very prissy about how we tell computers to do things.</p>
                </blockquote>
                <p>- Feynman</p>
            </article>
        );
    }

    return (
        <article class="blog-post" key={post.post_id}>
            <h3><Link to={`/blog/post/${post.post_id}`}>{post.post_title}</Link></h3>
            <div>
            { renderHTML(post.post_content) }
            </div>
            <p class="post-time">{post.post_date}</p>
        </article>
    );

}

export default BlogPost
