import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom';

export default function posts() {



    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetchPosts();
    }, [])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const userPost = await fetch('https://jsonplaceholder.typicode.com/posts');
        const res = await userPost.json()
        setPosts(res);
    }

    return (
        <div className="container">
            <h1>Posts</h1>
            {posts.map(post => (
                <div>
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            {post.title}
                            <Link to={`/post/${post.id}`} className="btn btn-secondary btn-lg">Read</Link>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    )
}
