import React, { useEffect, useState, Component } from 'react';
import { useParams } from 'react-router-dom';
import '../Post/Post.css';
import Comment from '../Comment/Comment';
const PostDetail = () => {
    const{postId}=useParams();
    const [post,setPost]=useState({});
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[]);
    return (
        <div className="PostStyle">
            <h1>{post.title}</h1>
            <p style={{fontSize:'25px'}}>{post.body}</p>
            <br/><br/>
            <h3>Comment Section</h3>
            <Comment></Comment>
        </div>
    );
};

export default PostDetail;