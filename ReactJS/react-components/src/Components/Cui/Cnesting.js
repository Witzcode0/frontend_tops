import React from 'react';

function Header() {
    return <header><h1>My Blog</h1></header>;
}

function PostTitle() {
    return <h2>Understanding React</h2>;
}

function PostContent() {
    return <p>React is a powerful library for building user interfaces...</p>;
}

function BlogPost() {
    return (
        <div>
            <Header />
            <PostTitle />
            <PostContent />
        </div>
    );
}

export default BlogPost;
