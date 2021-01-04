import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined } from '@material-ui/icons';
function Sidebar() {
    return (
        <div className="Sidebar">
           <SidebarRow src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUser_Avatar_2.png&psig=AOvVaw0oBIDQsPVC8NZ1f9ZZIwsE&ust=1607011135279000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiQxZDVr-0CFQAAAAAdAAAAABAV" title="Yohenba Kshetrimayum"/> 
           <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/> 
           <SidebarRow Icon={EmojiFlagsIcon} title="Pages" /> 
           <SidebarRow Icon={PeopleIcon} title="Friends" /> 
           <SidebarRow Icon={ChatIcon} title="Messenger" /> 
           <SidebarRow Icon={StorefrontIcon} title="Marketplace" /> 
           <SidebarRow Icon={VideoLibraryIcon} title="Videos" /> 
           <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" /> 
        </div>
    )
}

export default Sidebar
