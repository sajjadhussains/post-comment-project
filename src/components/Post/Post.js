import React from 'react';
import './Post.css'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
    const {title,body,id}=props.post;
    const history =useHistory();
    const handleClick=(postId)=>{
        const url=`/posts/${postId}`;
        history.push(url);
    }
    return (
        <div className="PostStyle">
            <h1>{title}</h1>
            <p className="post-detail">{body}</p>
            <Button onClick={()=>handleClick(id)}variant="contained" color="secondary">See detail</Button>
            
        </div>
    );
};

export default Post;