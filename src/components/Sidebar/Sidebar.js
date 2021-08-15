import React from 'react';
import './style.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';

export default function Sidebar() {
	return (
		<div className="Sidebar">
			<TwitterIcon className="Sidebar__twitterIcon"/>
			
			<SidebarOptions active Icon={HomeIcon} text="Home"/>
			<SidebarOptions Icon={SearchIcon} text="Explore"/>
			<SidebarOptions Icon={NotificationsNoneIcon} text="Notifications"/>
			<SidebarOptions Icon={MailOutlineIcon} text="Messages"/>
			<SidebarOptions Icon={BookmarkBorderIcon} text="BookMarks"/>
			<SidebarOptions Icon={ListAltIcon} text="List"/>
			<SidebarOptions Icon={PermIdentityIcon} text="Profile"/>
			<SidebarOptions Icon={MoreHorizIcon} text="More"/>

			<Button variant="outlined" className="Sidebar__tweet">Tweet</Button>
		</div>
	)
}
