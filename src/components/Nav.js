import React from 'react'
import '../styles/Nav.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from "react-redux"
import { auth } from '../Firebase';
import { logout, selectUser } from '../features/userSlice'

function Nav() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }


  return (
    <div className = "nav">
      <div className="nav__left">
        <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
        <div className="nav__search">
          <SearchIcon />
          <input type="text" placeholder = "Search" />
        </div>
      </div>
      <div className="nav__right">
          <HeaderOption Icon = {HomeIcon} title = "Home" />
          <HeaderOption Icon = {SupervisorAccountIcon} title = "My Network" />
          <HeaderOption Icon = {BusinessCenterIcon} title = "Jobs" />
          <HeaderOption Icon = {ChatIcon} title = "Messaging" />
          <HeaderOption Icon = {NotificationsIcon} title = "Notifications" />
          <HeaderOption avatar = {user.photoUrl || user.email[0]} title = "Me"
          onClick = {logoutOfApp} />
      </div>
    </div>
  )
}

export default Nav
