import React from 'react'
import '../styles/Nav.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Nav() {
  return (
    <div className = "nav">
      <div className="nav__left">
        <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
        <div className="nav__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="nav__right">
          <HeaderOption Icon = {HomeIcon} title = "Home" />
          <HeaderOption Icon = {SupervisorAccountIcon} title = "My Network" />
          <HeaderOption Icon = {BusinessCenterIcon} title = "Jobs" />
          <HeaderOption Icon = {ChatIcon} title = "Messaging" />
          <HeaderOption Icon = {NotificationsIcon} title = "Notifications" />
          <HeaderOption avatar = "https://media-exp3.licdn.com/dms/image/C5603AQFl8S3jchuyoQ/profile-displayphoto-shrink_100_100/0/1565099021456?e=1631750400&v=beta&t=qPdVckA5zK-wTPeUJ8oiDsK2r-nUOhktcFkiQsICmFs" title = "Me" />
      </div>
    </div>
  )
}

export default Nav
