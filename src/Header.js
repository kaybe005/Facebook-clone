import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


function Header() {
  return (
    <div className='header'>
        <div className="header-left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="fb-icon" />
            <div className="header-input">
                <SearchIcon />
                <input type='text' placeholder='Search Facebook' />
            </div>
        </div>


        <div className="header-center">
            <div className="header-option header-option--active">
                <HomeIcon fontSize="large"/>
            </div>
            <div className="header-option ">
                <FlagIcon fontSize="large"/>
            </div>
            <div className="header-option ">
                <SubscriptionsOutlinedIcon fontSize="large"/>
            </div>
            <div className="header-option ">
                <StorefrontOutlinedIcon fontSize="large"/>
            </div>
            <div className="header-option ">
                <SupervisedUserCircleIcon fontSize="large"/>
            </div>
        </div>


        <div className="header-right">
            <div className="header-info">
                <Avatar />
                <h4>Kalash Bijukchhe</h4>
            </div>
            <IconButton>
                <AddIcon />
            </IconButton>
            <IconButton>
                <ForumIcon />
            </IconButton>
            <IconButton>
                <NotificationsActiveIcon />
            </IconButton>
            <IconButton>
                <ExpandMoreIcon />
            </IconButton>
        </div>
    </div>
  )
}

export default Header