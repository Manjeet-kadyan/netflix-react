import React, { useState } from 'react';
import './topbar.scss';
import { ArrowDropDown, Notifications, Search } from '@mui/icons-material';

export default function Topbar() {
  const [isScrolled, setIsScrolled] =useState(false);

  window.onscroll= ()=>{
    setIsScrolled(window.pageYOffset===0 ? false : true)
    return () => window.onscroll= null;
  }
  console.log(isScrolled)

  return (
    <div className={isScrolled ? "topbar scrolled" : "topbar"}>
      <div className="container">
      <div className="left">
        <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
        <div>
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
        </div>
      </div>
      <div className="right">
        <Search className='icon'/>
        <span>Kid</span>
        <Notifications className='icon'/>
        <img src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?cs=srgb&dl=pexels-masha-raymers-2726111.jpg&fm=jpg" alt="" />
        <div className="profile" >
        <ArrowDropDown className='icon' />
        
        <div className="option">
            <span>Settings</span>
            <span>Log Out</span>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}
