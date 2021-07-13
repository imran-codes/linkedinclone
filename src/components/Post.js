import React,  { forwardRef } from 'react'
import '../styles/Post.css';
import { Avatar } from '@material-ui/core'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import SendIcon from '@material-ui/icons/Send';

const Post = forwardRef(({photoURL, name, timestamp, message, description, }, ref) => {
  
  return (
    <div ref = {ref} className = "post">
      <div className="post__top">
        <Avatar className = "post__avatar" src={photoURL}>{name[0]}</Avatar>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUpOutlinedIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineOutlinedIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <ArrowForwardOutlinedIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <SendIcon />
            <p>Send</p>
        </div>
      </div>
    </div>
  )
})

export default Post
