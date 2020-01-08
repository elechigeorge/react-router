import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function Post({ match }) {


    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetchPost();
    })

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [posts, setPost] = useState({});

    const fetchPost = async () => {
        const userPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`);
        const res = await userPost.json();
        setPost(res);

        console.log(res);
    }


    return (
        <div className="container">
            {posts === '' ? (<p>loading</p>) : (
                <div className="mt-4">
                    <Link to="/posts" className="btn btn-primary btn-lg mb-4" > Go Back </Link>
                    <h1 >{posts.title}</h1>
                    <hr />
                    <h4>{posts.body}</h4>

                </div>
            )}
        </div>
    )
}
