import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Comment.css';
import EmailIcon from '@material-ui/icons/Email';

const Comment = () => {
    const{postId}=useParams();
    const [comment,setComment]=useState([]);
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setComment(data))
    },[])
    return (
        <div>
            {
                comment.map(comments=>
                    <div>
                        <p><span>{comments.name}</span> {comments.body}</p>
                <p><EmailIcon></EmailIcon>{comments.email}</p>
                    </div>
                    )
            }
        </div>
    );
};

export default Comment;