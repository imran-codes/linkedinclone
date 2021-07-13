import React, {useState} from 'react'
import '../styles/Login.css'
import { useHistory } from 'react-router-dom';
import { auth } from '../Firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice'

function Login() {

  const history = useHistory();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const signIn = e => {
    e.preventDefault();
    //login logic
    auth.signInWithEmailAndPassword(email, password)
    .then((authUser) => {
      dispatch(
        login({
        email: authUser.user.email,
        uid: authUser.user.uid,
        displayName: authUser.user.displayName,
        profileUrl: authUser.user.photoURL,
      }))
      //logged in redirect
      history.push("/");
    })
    .catch ((e) => alert(e.message));
  }

  const register = e => {
    e.preventDefault();
    //register logic
    auth.createUserWithEmailAndPassword(email, password)
    .then((authUser) => {
      authUser.user.updateProfile({
        displayName: name,
        photoURL: profilePic,
      })
      .then(() => {
        dispatch(
          login({
          email: authUser.user.email,
          uid: authUser.user.uid,
          displayName: name,
          photoUrl: profilePic,
        }))
      })
      //logged in redirect
      // history.push("/");
    })
    .catch ((e) => alert(e));
  }

  return (
    <div className = "login">
      <img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" alt="" />
      <form>
        <input value = {name} onChange = {(e) => setName(e.target.value)} type="text" placeholder = "Full name (required if registering)" />
        <input value = {profilePic} onChange = {(e) => setProfilePic(e.target.value)} type="text" placeholder = "Profile pic URL (optional)" />
        <input value = {email} onChange = {(e) => setEmail(e.target.value)} type="email" placeholder = "Email" />
        <input value = {password} onChange = {(e) => setPassword(e.target.value)} type="password" placeholder = "Password" />
        <button onClick = {signIn}>Sign In</button>
      </form>

      <p>Not a member?
        <span className = "login__register" onClick = {register}> Register Now</span>
      </p>
    </div>
  )
}

export default Login
