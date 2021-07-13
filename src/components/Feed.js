import React, { useState, useEffect } from 'react';
import '../styles/Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption'
import PhotoIcon from '@material-ui/icons/Photo';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Post from './Post';
import db from '../Firebase'
import firebase from 'firebase';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux'
import FlipMove from 'react-flip-move'

function Feed() {
  const user = useSelector(selectUser);

  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');

  //update db on snapshot and update posts
  useEffect(() => {
    db.collection("posts")
    .orderBy('timestamp', 'desc' )
    .onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => {
          return {
            id: doc.id, 
            data: doc.data() 
          }
        }))
    })

}, [])

// add posts to db
  const sendPost = (e) => {
    e.preventDefault();
    //push posts to db by adding object
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      photoURL: user.photoURL || "",
    })

    //reset states for inputs
    setInput('');
  }

  return (
    <div className = "feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
              <input
              placeholder = {`Start a post`} 
              value ={input}
              onChange = {e => setInput(e.target.value)} />
              <button type = "submit" onClick = {sendPost}>Hidden Submit</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon = {PhotoIcon} title = "Photo" color = "#70b5f9" />
          <InputOption Icon = {VideoLibraryIcon} title = "Video" color = "#7fc15e" />
          <InputOption Icon = {EventIcon} title = "Event" color = "#e7a33e" />
          <InputOption Icon = {AssignmentIcon} title = "Write Article" color = "#fc9295" />
        </div>
      </div>

      {/* Posts */}
      <FlipMove>
      { posts.map((post) => (
            <Post 
            key = {post.id}
            photoURL = {post.data.photoURL} 
            description = {post.data.description}
            timestamp = {post.data.timestamp} 
            message = {post.data.message}
            name = {post.data.name} />
        ))} 
      </FlipMove>
    </div>
  )
}

export default Feed
