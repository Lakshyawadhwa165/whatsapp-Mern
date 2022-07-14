import React from "react"
import "./sidebar.css"
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import {Avatar} from '@mui/material';
import { IconButton } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';


import { SearchOutlined } from "@mui/icons-material";
import Sidebarchat from "./Sidebarchat";



export const Sidebar = () => {
  return (
    <div className='sidebar'>
            
        <div className="sidebar_header">
            <IconButton>
              <Avatar src="https://pps.whatsapp.net/v/t61.24694-24/255531302_1735838836762669_4775723471158656791_n.jpg?ccb=11-4&oh=01_AVypnnRLhwhXCfFvtXZPFovZjL0y1xOQ232J2D1jA_ehwA&oe=62DA45C4" />
            </IconButton>          
          <div className="sidebar_headerright">
            <IconButton aria-label="Donut">
              <DonutLargeIcon/>
            </IconButton>
            <IconButton aria-label="Chat">
              <ChatIcon />
            </IconButton>
            <IconButton aria-label="MoreVert">
              <MoreVertOutlinedIcon />
            </IconButton>
          </div>
        </div>
        <div className="sidebar_search">
          <div className="sidebar_searchContainer">
             <SearchOutlined/>
             <input placeholder="Search or start new chat" type="text" /> 


          </div>
        </div>
        <div className="sidebar_chats">
          <Sidebarchat />
          <Sidebarchat />
          <Sidebarchat />



        </div>
         


    </div>
  )
}
export default Sidebar;
