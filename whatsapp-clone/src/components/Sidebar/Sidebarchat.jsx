import React from 'react'
import "./sidebarchat.css";
import { Avatar } from '@mui/material'


export const Sidebarchat = () => {
  
  return (
    <div className='sidebarChat'>
        <Avatar src="https://pps.whatsapp.net/v/t61.24694-24/290639204_1772721036399786_7090941215115386635_n.jpg?ccb=11-4&oh=01_AVykPkXuq6MmufxQAzzJegUoZ_tbJ4R-R1qmQ0MqDJo5EQ&oe=62DB1334"/>
        <div className='sidebarchat_info'>
            <h2>Parul</h2>
            <p>heyy how you doin! </p>

        </div>

    </div>
    
  )
}
export default Sidebarchat;