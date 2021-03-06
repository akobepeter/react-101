
import React from "react";

function Blog({posts}) {

    const sidebar = (
        <ul>
            {posts.map(function(post) {
                return(
                    <li key={post.id}>{post.title}</li>
                )
            })}
        </ul>
    );
     
    const content = posts.map(function(post) {
        return (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>
        )
    })
    return (

        <div style={{}}>
            {sidebar}
            <hr/>
            {content}
        </div>
    )
}

export default Blog
