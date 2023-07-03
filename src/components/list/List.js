import React, { useRef, useState } from 'react';
import './list.scss';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import ListItem from '../listItem/ListItem';

export default function List() {
    const [slideNumber, setSlideNumber] = useState(0);
    const [display, setDisplay] = useState("none")
    const listRef = useRef();

    const handleClick = (direction)=>{
       
        let distance = listRef.current.getBoundingClientRect().x;
       if(direction==="left" && slideNumber>0){
         setSlideNumber(slideNumber - 1)
        listRef.current.style.transform = `translateX(${255 + distance}px)`
       }
       if(direction==="right" && slideNumber<4){
        setDisplay("flex")
        setSlideNumber(slideNumber + 1)
        listRef.current.style.transform = `translateX(${-255 + distance}px)`
       } 
    }


  return (
    <div className='list'>
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className='sliderArrow left' onClick={()=>handleClick("left")}
        style={{display: display}} />
        <div className="container" ref={listRef}>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
       
        </div>
        <ArrowForwardIosOutlined className='sliderArrow right' onClick={()=>handleClick("right")}/>
      </div>
    </div>
  )
}
