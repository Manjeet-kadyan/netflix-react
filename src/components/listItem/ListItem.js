import React, { useState } from 'react';
import './listItem.scss';
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material';

export default function ListItem() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (position)=>{
    if(position=="enter"){
      setIsHovered(true)
    } 
    if(position=="leave"){
      setIsHovered(false)
    }
  }

  return (
    <div className='listItem'>
        <div className="container" onMouseEnter={()=>handleClick("enter")} onMouseLeave={()=>handleClick("leave")}>
       {isHovered ? <video className="vid" width="100%" height="150px" loop muted autoPlay controls="controls">
        <source src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4' type='video/mp4'/>
       </video>
       :
     <img width="100%" src="https://www.shutterstock.com/image-illustration/portgas-d-ace-artistic-anime-260nw-2027988110.jpg" alt="" />
  }
     <div className="info">
       <div className="icons">
        <PlayArrow className='icon'/>
        <Add className='icon'/>
        <ThumbUpAltOutlined className='icon'/>
        <ThumbDownAltOutlined className='icon'/> 
       </div>
       <div className="time">
       <span className='watchTIme'>1 hour 15min</span>
       <span className='plus'>+16</span>
        <span className='year'>2001</span>
       </div>
       <div className="about">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, ipsa.
        <div className="type">Action</div>
       </div>
     </div>
        </div>
    </div>
  )
}
